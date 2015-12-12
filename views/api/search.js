var ObjectUtils = require("../../models/objectUtils");

module.exports = {
  resultsFrom: function(places) {
    var results = [];
    for(var i in places) {
      var place = places[i];
      results.push(toSearchResult(place));
    }
    return {results: results};
  }
};

function toSearchResult(place) {
  var result = ObjectUtils.cloneOnlyWith(place, ["type", "facts", "photos"])
  result.name = place.names[0];
  return result;
}
