var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, default: null},
    bio: {type: String, default: null},
    email: {type: String, unique: true, index: true, required: true},
},
{
    versionKey: false
});

var User = mongoose.model('User', userSchema);

module.exports = User;
