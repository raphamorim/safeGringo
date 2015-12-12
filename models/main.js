var Place = require('./place');

require('mongoose').connect('mongodb://localhost/test');

//var place = new Place({
//  type: "Turism",
//  names: ["Forte de copacabana"],
//  photos: ["http://goo.gl/XXm64B"],
//  facts: ["Don't ever go."]
//});
//place.save(function(err) {
//  if(err) {
//    console.log(err);
//    return;
//  }
//  console.log("Sucesso!!");
//});
//Place.find({}, function(err, places) {
//  console.log(places);
//});
//
Place.like("Corc", function(err, places) {
  console.log(places);
});
