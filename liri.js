require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

//User input
var userInput = process.argv[2];
var userChoice = process.argv[3];

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//Movie Info--- still need to add it.
var movieTitle;
var movieYear;
var movieRating;
var movieCountry;
var movieLang;
var moviePlot;
var movieActor;
var tomatoRating;
var tomatoURL;


//need to work on refining the information given by the twitter API
var params = {screen_name: '@theymademedoit6'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


 //need to work on refining the search
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });


  //movie search items
