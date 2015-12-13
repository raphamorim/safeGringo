var Place = require('../models/place'),
    env   = require('../config/environment');

require('mongoose').connect(env.config.mongo);
Place.find({}).remove().exec();

var BEACH_FACTS = [
  "Do not let your belongs alone on the sand."
];

var places = [
  new Place({
    type: "Beach",
    names: ["Praia de Copacabana", "Copacabana Beach", "Beach of Copacabana"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/a3/Rio_de_janeiro_copacabana_beach_2010.JPG"],
    facts: [
      "Avoid bringing valuable belongings on crownded days like weekends, because criminals usually roam around."
    ].concat(BEACH_FACTS),
    tags: ["Beach", "Copacabana", "Praia"],
    stealingOcurrencesTerm: ["Copacabana", "Copacabana Beach"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Corcovado", "Christ the Redeemer", "Cristo Redentor"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/97/Cristo_Redentor_-_Rio_de_Janeiro,_Brasil-crop.jpg"],
    facts: ["The hiking trails usually have thefts."],
    tags: ["Trolley", "tram", "cable car"],
    stealingOcurrencesTerm: ["Corcovado", "Christ the Redeemer"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Lapa", "Lapa"],
    photos: ["http://goo.gl/XXm64B"],
    facts: [
      "It is highly frequented by criminals so avoid being alone and carrying valuable belongings.",
      "Avoid deserted streets like Rua do Passeio, try to stay close to the Arches that usually are busy."
    ],
    tags: ["Arcos", "Arches", "Centro", "Downtown"],
    stealingOcurrencesTerm: ["Lapa", "Lapa"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Ipanema", "Ipanema"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/af/1_ipanema_beach_vidigal_sunset.jpg"],
    facts: [
      "Avoid bringing valuable belongings on crownded days like weekends, because criminals usually roam around."
    ].concat(BEACH_FACTS),
    tags: ["Beach", "Praia"],
    stealingOcurrencesTerm: ["Ipanema", "Ipanema"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Pão de Açúcar", "Sugar Mountain", "Sugarloaf Cable Car"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/4/4c/Enseada_de_Botafogo_e_P%C3%A3o_de_A%C3%A7%C3%BAcar.jpg"],
    facts: ["One of safest places in Rio."],
    tags: ["Urca"],
    stealingOcurrencesTerm: ["Pão de açúcar", "Sugarloaf Cable Car"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Santa Teresa", "Saint Teresa Convent"],
    photos: ["http://annabelleinriodejaneiro.com/wp-content/uploads/2012/12/Santa-Teresa.jpg"],
    facts: [
    ],
    tags: [],
    stealingOcurrencesTerm: ["Santa Teresa", "Saint Teresa"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Maracanã", "Maracanã Stadium"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/d/d4/Maracan%C3%A3_2014_e.jpg"],
    facts: [
      "Avoid walk too far away from the Stadium because it has less police units."
    ],
    tags: ["Tijuca", "Estádio"],
    stealingOcurrencesTerm: ["Maracanã", "Maracanã Stadium"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Floresta da Tijuca", "Tijuca Forest"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Floresta_da_Tijuca_60.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Tijuca"]
  }),

  new Place({
    type: "Beach",
    names: ["Leblon", "Leblon"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/f/f8/Praia_do_Leblon.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Leblon"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Arpoador", "Harpoon thrower"],
    photos: ["http://www.viagem10.com.br/praias/arpoador/arpoador_04g.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Arpoador"]
  }),

  new Place({
    type: "Theatre",
    names: ["Teatro Municipal", "Municipal Theatre"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/b/ba/Teatro_Municipal_Rio_de_Janeiro.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Cinelândia"]
  }),

  new Place({
    type: "Fortress",
    names: ["Forte de Copacabana", "Copacabana Fort"],
    photos: ["http://www.openhouserio.com.br/imagens/espacos/fortedecopacabana/001.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Copacabana"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Escadaria Selarón", "Selarón Steps"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/d/dd/Selaron_Stairs,_Rio_de_Janeiro,_Brasil.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Lapa"]
  }),

  new Place({
    type: "Park",
    names: ["Parque Lage", "Lage Park"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/ParqueLage-CCBY.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Jardim Botânico"]
  }),

  new Place({
    type: "Beach",
    names: ["Praia do Recreio", "Recreio Beach"],
    photos: ["http://files.corretorvip.com.br/cvip/landingpage/recreio/imovelvip-recreio-dos-bandeirantes-praia-do-recreio-pedra-do-pontal.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Recreio"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Jardim Botânico", "Botanical Garden"],
    photos: ["http://www.caugo.org.br/wp-content/uploads/2014/06/DSCN5181.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Jardim Botânico", "Botanical Garden"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Pedra da Gávea", "Gávea Stone"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/2/27/Pedra_da_gavea_(3).JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Gávea"]
  }),

  new Place({
    type: "Museum",
    names: ["Museu de Arte Moderna", "Museum of Modern Art"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/5/53/MAM_-_Museu_de_Arte_Moderna_do_Rio_de_Janeiro_02.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Flamengo"]
  }),

  new Place({
    type: "Sambodrome",
    names: ["Sambódromo", "Sambadrome Marquês de Sapucaí"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/5/53/MAM_-_Museu_de_Arte_Moderna_do_Rio_de_Janeiro_02.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Island in the Guanabara Bay",
    names: ["Ilha do Governador", "Governor Island"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/9b/Ilha_do_Governador.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Ilha do Governador", "Governor Island"]
  }),

  new Place({
    type: "Island in the Guanabara Bay",
    names: ["Quinta da Boa Vista", "Park of the Nice View"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/3/39/Quinta_da_Boa_Vista_17.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["São Cristóvão"]
  }),

  new Place({
    type: "Cathedral",
    names: ["Catedral", "Cathedral"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Rio_de_janeiro_cathedral_sao_sebastiao_2010.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Nudebeach",
    names: ["Grumari", "Grumari Beach", "Abricó Beach"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Rio_de_janeiro_cathedral_sao_sebastiao_2010.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Grumari"]
  }),

  new Place({
    type: "Catholic Church",
    names: ["Candelária", "Candelária Church"],
    photos: ["http://www.worldtoptop.com/wp-content/uploads/2011/05/igreja_candelaria_7.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Beach",
    names: ["Joatinga", "Joa Beach"],
    photos: ["http://www.rio-de-janeiro-travel-information.com/images/Joatinga-Beach-photos-10.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Joatinga", "Joatinga"]
  }),

  new Place({
    type: "Neighborhood",
    names: ["Guaratiba", "Guaratiba"],
    photos: ["http://www.conexaojornalismo.com.br/fotos/guaratiba_vale_link.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Guaratiba"]
  }),

  new Place({
    type: "Turistic Point",
    names: ["Engenhão", "Nilton Santos Stadium"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/95/Stitched_003.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Engenho de dentro"]
  }),

  new Place({
    type: "Museum",
    names: ["Museu Nacional", "National Museum of Brazil"],
    photos: ["http://cdn1.images.touristlink.com/data/cache/P/A/C/3/A/7/O/D/national-museum-of-brazil-pa-c-3-a-7o-_de-_-s-3o-crist-b-3v_400_300.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["São Cristóvão"]
  }),

  new Place({
    type: "Museum",
    names: ["Museu Imperial", "Imperial Museum of Brazil"],
    photos: ["http://cdn1.images.touristlink.com/data/cache/P/A/C/3/A/7/O/D/national-museum-of-brazil-pa-c-3-a-7o-_de-_-s-3o-crist-b-3v_400_300.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Museum",
    names: ["Museu Nacional de Artes Finas", "National Museum of Fine Arts"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/8/8c/MNBA_-_Marc_Ferrez_b.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Museum",
    names: ["Museu Nacional Histórico", "National Historical Museum"],
    photos: ["http://www.riodejaneirohotel.com.br/site/img.php?f=2011,03,22-338c0.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Centro", "Downtown"]
  }),

  new Place({
    type: "Swim Club",
    names: ["Parque Aquático Maria Lenk", "Maria Lenk Aquatic Center"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/90/Parque_Aqu%C3%A1tico_Maria_Lenk_13072007.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: ["Barra da Tijuca"]
  })
];

for(var i in places) {
  places[i].saveWithTerms(function(err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Sucesso!!");
  });
}
