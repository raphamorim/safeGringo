var kenobi = require('kenobi');

exports.api = require('./api.js');
exports.index = function(req, res){
    kenobi({}, '/views/index.ejs', res.end);
};
