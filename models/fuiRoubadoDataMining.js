var allOcurrences = require('../data/ondefuiroubado.json');

var RANGE_INTERVAL = 6;

module.exports = {
  extractData: function(term) {
    var ocurrences = allOcurrences.filter(function(ocurrence) {
      return ((ocurrence.description || "")
        + (ocurrence.endereco || "")
        + (ocurrence.bairro || "")
        + (ocurrence.titulo || "")
      ).toLowerCase().match(term.trim().toLowerCase());
    });

    var ocurrencesByHour = {
      '0' : 0, // 00h ~ 06h
      '6' : 0, // ...
      '12' : 0,
      '18' : 0
    };
    ocurrences.forEach(function(ocurrence) {
      if(ocurrence.hora) {
        var hour = new Date(ocurrence.hora).getUTCHours();
        var interval = Math.floor(hour/RANGE_INTERVAL)*RANGE_INTERVAL;
        ocurrencesByHour[interval]++;
      }
    });
    var total = 0;
    Object.keys(ocurrencesByHour).forEach(function(hour){
      total += ocurrencesByHour[hour];
    });

    var percents = hourRangesBiggerPercents(total, ocurrencesByHour);
    return makeDataResume(ocurrencesByHour, percents, total);
  }
};

function hourRangesBiggerPercents(total, hours) {
  var percents = {};
  Object.keys(hours).forEach(function(hour){
    percents[hour] = Math.round((hours[hour] / total)*10000)/100;
  });
  return percents;
}

function makeDataResume(ocurrences, percents, total) {
  return {
    total: total,
    dangerHours: Object.keys(percents).map(function(hour) {
      return {
        hourRange: {start: parseInt(hour, 10), end: (parseInt(hour,10)+RANGE_INTERVAL)%24},
        ocurrences: ocurrences[hour],
        percent: percents[hour]
      };
    })
  };
}
