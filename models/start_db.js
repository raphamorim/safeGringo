var Place = require('./place');

require('mongoose').connect('mongodb://localhost/test');
Place.find({}).remove().exec();

var places = [
  new Place({
    type: "Turistic Point",
    names: ["Corcovado", "Cristo Redentor", "Christ the Redeemer"],
    photos: ["https://goo.gl/gtmX3E"],
    facts: ["Safe, no worries."],
    tags: ["Trolley", "tram", "cable car"]
  }),
  new Place({
    type: "Turistic Point",
    names: ["Copacabana Fort"],
    photos: ["http://goo.gl/XXm64B"],
    facts: ["Don't ever go."],
    tags: ["Beach", "Copacabana"]
  }),
  new Place({
    type: "Beach",
    names: ["Copacabana Beach"],
    photos: ["http://goo.gl/XXm64B"],
    facts: ["Don't ever go."],
    tags: ["Beach", "Copacabana"]
  }),
  new Place({
    type: "Turistic Point",
    names: ["Lapa"],
    photos: ["http://goo.gl/XXm64B"],
    facts: ["Whores at night", "Little bandits during the morning", "Do not pull valuable objects without looking around"],
    tags: ["Arches", "Downtown"]
  })
];

for(var i in places) {
  places[i].save(function(err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Sucesso!!");
  });
}
