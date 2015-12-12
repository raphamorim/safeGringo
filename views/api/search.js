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
  var result = ObjectUtils.cloneOnlyWith(place, ["type", "facts", "photos"])
  result.name = place.names[0];
  result.stealingOcurrences = toStealingOcurrencesJSON(place.stealingOcurrences, place.stealingOcurrencesTerm)
  return result;
}

function toStealingOcurrencesJSON(ocurrencesData, term) {
  return {
    regionName: term,
    total: ocurrencesData.total,
    dangerHours: ocurrencesData.dangerHours.map(function(dangerHour) {
      var dangerHourJSON = ObjectUtils.cloneOnlyWith(dangerHour, ["hourRange", "ocurrences", "percent"]);
      var start = dangerHour.hourRange.start;
      var end = dangerHour.hourRange.end;
      dangerHourJSON.prettyRange = util.format("%sh to %sh", start, end);
      return dangerHourJSON;
    })
  };
}
