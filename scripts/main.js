var fuiRoubado = require('../models/fuiRoubadoDataMining');

console.log("Copacabana", fuiRoubado.extractData("Copacabana"));
console.log("Lapa",       fuiRoubado.extractData("Lapa"));
console.log("Centro",     fuiRoubado.extractData("Centro"));
console.log("Leblon",     fuiRoubado.extractData("Leblon"));
console.log("Gávea",      fuiRoubado.extractData("Gávea"));
console.log("Maracanã",   fuiRoubado.extractData("Maracanã"));


//var Place = require('./place');

//require('mongoose').connect('mongodb://localhost/test');

//Place.search("Forte de copacabana", function(err, places) {
//  console.log(places);
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
//Place.search("Copacabana   Beach", function(err, places) {
//  console.log(places);
//});
