var mongoose = require('mongoose');
var data = require('../data/ondefuiroubado_121220150212.json');
var Place = require('../models/place');

desc('This is the default task.');
task('default', function () {
  mongoose.connect('mongodb://localhost/test');

  for (var i=0; i < data.length; i++) {
    console.log("====");
    console.log("Endereço:", data[i].endereco);
    console.log("Data:", data[i].data);
    console.log("horário:", data[i].hora);
  }

  mongoose.disconnect();
});