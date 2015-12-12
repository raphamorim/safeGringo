var allOcurrences = require('../data/ondefuiroubado.json');

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
      0 : 0, // 00h ~ 03h
      3 : 0, // 03h ~ 06h
      6 : 0, // ...
      9 : 0,
      12 : 0,
      15 : 0,
      18 : 0,
      21 : 0
    };
    ocurrences.forEach(function(ocurrence) {
      if(ocurrence.hora) {
        var hour = new Date(ocurrence.hora).getUTCHours();
        ocurrencesByHour[Math.floor(hour/3)*3]++;
      }
    });
    var total = Object.keys(ocurrencesByHour).reduce(function(total, hour){
      return parseInt(total, 10) + parseInt(ocurrencesByHour[hour], 10);
    });

    var percents = hourRangesBiggerPercents(total, ocurrencesByHour);
    return makeDataResume(ocurrencesByHour, percents, total);
  }
};

function hourRangesBiggerPercents(total, hours) {
  var percents = {};
  Object.keys(hours).forEach(function(hour){
    var percent = Math.round((hours[hour] / total)*10000)/100;
    if(percent >= 15) {
      percents[hour] = percent;
    }
  });
  return percents;
}

function makeDataResume(ocurrences, percents, total) {
  return {
    total: total,
    dangerHours: Object.keys(percents).map(function(hour) {
      return {
        hourRange: {start: parseInt(hour, 10), end: (parseInt(hour,10)+3)%24},
        ocurrences: ocurrences[hour],
        percent: percents[hour]
      };
    })
  };
}
