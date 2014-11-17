var io = require('socket.io')(19803);
var Twitter = require('node-tweet-stream')
  , tw = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    token: '',
    token_secret: ''
  });

tw.track('javascript');
tw.track('nodejs');
tw.track('socket.io');

tw.on('tweet', function(tweet){
  io.emit('tweet', tweet);
});
