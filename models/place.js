var mongoose = require('mongoose'),
    stopwords = require('../data/stopwords.json'),
    ArrayUtils = require('./arrayUtils'),
    fuiRoubado = require('../models/fuiRoubadoDataMining'),
    Schema = mongoose.Schema;

var placeSchema = new Schema({
    type: {type: String},
    names: [{type: String, unique: true, required: true}],
    photos: [{type: String}],
    facts: [{type: String}],
    tags: [{type: String, unique: true, required: true}],
    searchTerms: [{type: String, index: true}],
    stealingOcurrencesTerm: {type: String},
    stealingOcurrences: {
      total: {type: Number},
      dangerHours: [{
        hourRange: {start: {type: Number}, end: {type: Number}},
        ocurrences: {type: Number},
        percent: {type: Number}
      }]
    }
},
{
    versionKey: false
});

placeSchema.methods.saveWithTerms = function(cb) {
  this.searchTerms = searchTermsFor(this);
  this.stealingOcurrences = fuiRoubado.extractData(this.stealingOcurrencesTerm);
  this.save(cb);
};

placeSchema.statics.like = function(name, cb) {
  var query = {
    "searchTerms": new RegExp(".*" + name + ".*", "i")
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
          results[name].founds++;
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
        resultsArray = resultsArray.sort(function(r1, r2) {
          return r1.founds < r2.founds;
        });
        cb(false, resultsArray.map(function(result) {
          return result.place;
        }));
      }
    });
  }
};

function searchTermsFor(self) {
  var allTerms = (self.names || [])
    .concat(self.tags || []);

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
  
  return ArrayUtils.uniq(selectedTerms);
}

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;
