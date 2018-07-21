require("dotenv").config();
var Twitter = require('twitter');

var keys = require("./keys.js");
console.log(keys)

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var params = {screen_name: '@theymademedoit6'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

