var Place      = require('../models/place'),
    searchView = require('../views/api/search');

exports.search = function(req, res) {
  var query = req.query.q;
  Place.search(query, function(err, places) {
    if(err) {
      res.statusCode = 500;
      res.send(JSON.stringify({errors: err}));
    } else {
      var json = searchView.resultsFrom(places);
      res.send(JSON.stringify(json));
    }
  });
};
