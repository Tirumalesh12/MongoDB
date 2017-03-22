var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');


var Book = require('./models/user');
var Favourites = require('./models/favourites');
  


function addFavourites(string, Favourites, Book) {
    Book.findOne({name: string }, function(err, user) {
        if (err) {
            throw err;
        } else {
            Favourites.collection.insert(user, onInsert);
            function onInsert(err, docs) {
                if (err) {
                    throw err;
                }else {
                    console.log("added to fav");
                }
            }
        }
    });
}

addFavourites("sagar", Favourites, Book);

Favourites.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});