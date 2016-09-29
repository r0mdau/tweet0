var io = require('socket.io')(19803);
var Stream = require('user-stream');
var stream = new Stream({
	consumer_key: 'Q9HiiLBuw5N4mosziBLy30svG',
    consumer_secret: 'dmfHmeekQHdq3xXhfp0cXNgsE528LLAsUmmYTeTjCIH0QB0DBt',
    access_token_key: '72351869-X3q53WlohZpRapyvQmSEJGdQVCAgaMvfuTH6ubtGf',
    access_token_secret: 'Es2e9DzMNnVKeYdB2516Fa3ZF5SB9z8inrO42cMB27Pn2'
});

stream.stream();

stream.on('data', function(tweet) {
	io.emit('tweet', tweet);
});
