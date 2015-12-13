var ObjectUtils = require("../../models/objectUtils"),
    util = require("util");

module.exports = {
  resultsFrom: function(places) {
    var results = [];
    for(var i in places) {
      var place = places[i];
      results.push(toSearchResult(place));
    }
    return {suggestions: results};
  }
};

function toSearchResult(place) {
  var result = ObjectUtils.cloneOnlyWith(place, ["facts", "photos"])
  result.name = {portuguese: place.names[0], english: place.names[1] || place.names[0]};
  result.stealingOcurrences = toStealingOcurrencesJSON(place.stealingOcurrences, place.stealingOcurrencesTerm);
  return result;
}

function toStealingOcurrencesJSON(ocurrencesData, terms) {
  var PRETTY_NAMES = {'0': "Dawn", '6': "Morning", '12': "Afternoon", '18': "Night"};
  return {
    regionName: {portuguese: terms[0], english: terms[1] || terms[0]},
    total: ocurrencesData.total,
    dangerHours: ocurrencesData.dangerHours.map(function(dangerHour) {
      var dangerHourJSON = ObjectUtils.cloneOnlyWith(dangerHour, ["ocurrences"]);
      var start = dangerHour.hourRange.start;
      var end = dangerHour.hourRange.end;
      dangerHourJSON.prettyRange = util.format("%sh to %sh", start, end);
      dangerHourJSON.prettyName = PRETTY_NAMES[start];
      dangerHourJSON.percent = Math.round(dangerHour.percent);
      return dangerHourJSON;
    })
  };
}
