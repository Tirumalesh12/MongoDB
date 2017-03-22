var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

// create a schema
var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  admin: Boolean,
  location: String,
});

// the schema is useless so far
// we need to create a model using it
var Favourites = mongoose.model('Favourites', userSchema);

// make this available to our users in our Node applications
module.exports = Favourites;