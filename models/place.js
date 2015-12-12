var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var placeSchema = new Schema({
    type: {type: String},
    names: [{type: String, unique: true, index: true, required: true}],
    photos: [{type: String}],
    facts: [{type: String}],
    tags: [{type: String, unique: true, index: true, required: true}]
},
{
    versionKey: false
});

placeSchema.statics.like = function(name, cb) {
  var query =
    {"$or": [
      {"names": new RegExp(".*" + name + ".*", "i")},
      {"tags": new RegExp(".*" + name + ".*", "i")}
    ]};

  Place.find(query, function(err, places) {
    cb(err, places);
  });
};

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;
