var Place = require('../models/place'),
    env   = require('../config/environment');

require('mongoose').connect(env.config.mongo);
Place.find({}).remove().exec();

var places = [
  new Place({
    type: "Beach",
    names: ["Copacabana Fort", "Copacabana Beach", "Beach of copacabana"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/a3/Rio_de_janeiro_copacabana_beach_2010.JPG"],
    facts: ["Don't ever go."],
    tags: ["Beach", "Copacabana"],
    stealingOcurrencesTerm: "Copacabana"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Corcovado", "Cristo Redentor", "Christ the Redeemer"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/97/Cristo_Redentor_-_Rio_de_Janeiro,_Brasil-crop.jpg"],
    facts: ["Safe, no worries."],
    tags: ["Trolley", "tram", "cable car"],
    stealingOcurrencesTerm: "Corcovado"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Lapa"],
    photos: ["http://goo.gl/XXm64B"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Lapa"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Ipanema"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/af/1_ipanema_beach_vidigal_sunset.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Ipanema"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Sugar Mountain", "Sugarloaf Cable Car"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/4/4c/Enseada_de_Botafogo_e_P%C3%A3o_de_A%C3%A7%C3%BAcar.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Pão de açúcar"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Santa Teresa", "Santa Teresa Convent"],
    photos: ["http://annabelleinriodejaneiro.com/wp-content/uploads/2012/12/Santa-Teresa.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Santa Teresa"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Maracanã Stadium"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/d/d4/Maracan%C3%A3_2014_e.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Maracanã"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Tijuca Forest"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Floresta_da_Tijuca_60.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Tijuca"
  }),

  new Place({
    type: "Bairro no Rio de Janeiro",
    names: ["Leblon"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/f/f8/Praia_do_Leblon.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Leblon"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Arpoador", "Harpoon thrower"],
    photos: ["http://www.viagem10.com.br/praias/arpoador/arpoador_04g.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Arpoador"
  }),

  new Place({
    type: "Theatre",
    names: ["Municipal Theatre"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/b/ba/Teatro_Municipal_Rio_de_Janeiro.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Cinelândia"
  }),

  new Place({
    type: "Fortress",
    names: ["Copacabana Fort"],
    photos: ["http://www.openhouserio.com.br/imagens/espacos/fortedecopacabana/001.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Copacabana"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Selaron Steps"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/d/dd/Selaron_Stairs,_Rio_de_Janeiro,_Brasil.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Lapa"
  }),

  new Place({
    type: "Park",
    names: ["Lage Park", "Parque Lage"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/ParqueLage-CCBY.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Jardim Botânico"
  }),

  new Place({
    type: "Beach",
    names: ["Recreio dos Bandeirantes", "Recreio"],
    photos: ["http://files.corretorvip.com.br/cvip/landingpage/recreio/imovelvip-recreio-dos-bandeirantes-praia-do-recreio-pedra-do-pontal.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Recreio"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Botanical Garden"],
    photos: ["http://www.caugo.org.br/wp-content/uploads/2014/06/DSCN5181.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Jardim Botânico"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Gávea Stone"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/2/27/Pedra_da_gavea_(3).JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Gávea"
  }),

  new Place({
    type: "Museum",
    names: ["Museum of Modern Art"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/5/53/MAM_-_Museu_de_Arte_Moderna_do_Rio_de_Janeiro_02.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Flamengo"
  }),

  new Place({
    type: "Sambodrome",
    names: ["Sambadrome Marquês de Sapucaí"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/5/53/MAM_-_Museu_de_Arte_Moderna_do_Rio_de_Janeiro_02.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Island in the Guanabara Bay",
    names: ["Governador Island"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/9b/Ilha_do_Governador.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Olha do Governador"
  }),

  new Place({
    type: "Island in the Guanabara Bay",
    names: ["Park of the Nice View"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/3/39/Quinta_da_Boa_Vista_17.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "São Cristóvão"
  }),

  new Place({
    type: "Island in the Guanabara Bay",
    names: ["Paquetá Island"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Paqueta2008.JPG/300px-Paqueta2008.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Paquetá"
  }),

  new Place({
    type: "Park",
    names: ["Terra Encantada"],
    photos: ["http://www.diariodorio.com/wp-content/uploads/2012/10/Terra-Encantada.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Barra da Tijuca"
  }),

  new Place({
    type: "Cathedral",
    names: ["Cathedral"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Rio_de_janeiro_cathedral_sao_sebastiao_2010.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Nudebeach",
    names: ["Abricó beach"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Rio_de_janeiro_cathedral_sao_sebastiao_2010.JPG"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Grumari"
  }),

  new Place({
    type: "Catholic Church",
    names: ["Candelária Church"],
    photos: ["http://www.worldtoptop.com/wp-content/uploads/2011/05/igreja_candelaria_7.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Beach",
    names: ["Joa Beach"],
    photos: ["http://www.rio-de-janeiro-travel-information.com/images/Joatinga-Beach-photos-10.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Joatinga"
  }),

  new Place({
    type: "Museum",
    names: ["Museum of Life"],
    photos: ["https://farm3.staticflickr.com/2940/14323172820_ef49940ae8_z.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Manguinhos"

  }),

  new Place({
    type: "Museum",
    names: ["National Aviation Museum"],
    photos: ["https://lh3.googleusercontent.com/-fzptonQxjyg/AAAAAAAAAAI/AAAAAAAAAGo/sfk5qLR8BpI/s0-c-k-no-ns/photo.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Campo dos Afonsos"
  }),

  new Place({
    type: "Neighborhood",
    names: ["Guaratiba"],
    photos: ["http://www.conexaojornalismo.com.br/fotos/guaratiba_vale_link.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Guaratiba"
  }),

  new Place({
    type: "Turistic Point",
    names: ["Nilton Santos Stadium", "Engenhão"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/95/Stitched_003.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Engenho de dentro"
  }),

  new Place({
    type: "Museum",
    names: ["National Museum of Brazil"],
    photos: ["http://cdn1.images.touristlink.com/data/cache/P/A/C/3/A/7/O/D/national-museum-of-brazil-pa-c-3-a-7o-_de-_-s-3o-crist-b-3v_400_300.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "São Cristóvão"
  }),

  new Place({
    type: "Museum",
    names: ["Imperial Museum of Brazil"],
    photos: ["http://cdn1.images.touristlink.com/data/cache/P/A/C/3/A/7/O/D/national-museum-of-brazil-pa-c-3-a-7o-_de-_-s-3o-crist-b-3v_400_300.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Museum",
    names: ["National Museum of Fine Arts"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/8/8c/MNBA_-_Marc_Ferrez_b.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Museum",
    names: ["National Historical Museum"],
    photos: ["http://www.riodejaneirohotel.com.br/site/img.php?f=2011,03,22-338c0.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Park",
    names: ["Passeio Público"],
    photos: ["https://amzcomunicacao.files.wordpress.com/2013/02/00127399.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Swim Club",
    names: ["Maria Lenk Aquatic Center"],
    photos: ["https://upload.wikimedia.org/wikipedia/commons/9/90/Parque_Aqu%C3%A1tico_Maria_Lenk_13072007.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Barra da Tijuca"
  }),

  new Place({
    type: "Church Catholic",
    names: ["Old Cathedral"],
    photos: ["https://c1.staticflickr.com/9/8184/8084240964_5f7818acc7_b.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Centro"
  }),

  new Place({
    type: "Island",
    names: ["Villegagnon Island"],
    photos: ["https://historysshadow.files.wordpress.com/2015/03/66_big.jpg"],
    facts: [],
    tags: [],
    stealingOcurrencesTerm: "Castelo"
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
