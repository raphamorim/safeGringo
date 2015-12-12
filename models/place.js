var mongoose = require('mongoose'),
    stopwords = require('../data/stopwords.json'),
    ArrayUtils = require('./arrayUtils'),
    Schema = mongoose.Schema;

var placeSchema = new Schema({
    type: {type: String},
    names: [{type: String, unique: true, required: true}],
    photos: [{type: String}],
    facts: [{type: String}],
    tags: [{type: String, unique: true, required: true}],
    searchTerms: [{type: String, index: true}],
},
{
    versionKey: false
});

placeSchema.methods.saveWithSearchTerms = function(cb) {
  var allTerms = (this.names || [])
    .concat(this.tags || []);

  var terms = []
  for(var i in allTerms) {
    terms = terms.concat(allTerms[i].split(/ +/));
  }

  var selectedTerms = [];
  for(var i in terms) {
    var term = terms[i].trim().toLowerCase();
    if(!stopwords[term]) {
      selectedTerms.push(term);
    }
  }
  
  this.searchTerms = ArrayUtils.uniq(selectedTerms);
  this.save(cb);
};

placeSchema.statics.like = function(name, cb) {
  var query = {
    "searchTerms": new RegExp("(^|.*[-_ ])" + name + "([-_ ].*|$)", "i")
  };

  Place.find(query, function(err, places) {
    cb(err, places);
  });
};

placeSchema.statics.search = function(termsStr, cb) {
  var terms = termsStr.trim().split(/ +/);
  var results = {};
  for(var i in terms) {
    var term = terms[i];
    var finishedCount = 0;
    Place.like(term, function(err, places) {
      for(var j in places) {
        var place = places[j];
        var name = place.names[0];
        if(results[name]) {
          results[name]["founds"]++;
        } else {
          results[name] = {
            found: 1,
            place: place
          };
        }
      }
      finishedCount++;
      if(finishedCount >= terms.length) {
        var resultsArray = [];
        for(var k in results) {
          resultsArray.push(results[k]);
        }
        resultsArray = resultsArray.sort(function(result) {
          return result["founds"];
        }).reverse();
        cb(false, resultsArray.map(function(result) {
          return result["place"];
        }));
      }
    });
  }
};

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;
