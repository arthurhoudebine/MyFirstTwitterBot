var Twit = require('twit')
var T = new Twit({
    consumer_key:         'TpUq0D4KLldyfyl2hgThVItzk',
    consumer_secret:      'DScuTtO9fHQq6EZMdBCAdqLA6M2jeIE1L2EYdc1gFGkJJmpffN',
    access_token:         '2926848095-IiwBfJlZ9YZuy6XhuhzPnXOrnIXpf9IvDX0zRpJ',
    access_token_secret:  'KkV478Br6BvZhcSf0pvblLdlimh7RLfc3nvmcLfvvfKww',
})

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
//   })  
  
// T.post('statuses/retweet/:id', { id: '1073754910900944897' }, function (err, data, response) {
//     console.log(data)
//   })  

var users = ["986331243410350080"];

var stream = T.stream('statuses/filter', {follow: users});


stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})


