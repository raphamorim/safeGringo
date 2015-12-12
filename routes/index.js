var kenobi = require('kenobi');

exports.index = function(req, res){
    kenobi({}, '/views/index.ejs', res.end);
};
