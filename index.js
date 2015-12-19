var express = require('express');
var app = express();

var port = 3000;

var ongoing_matches = {};

app.post('/update', function(req, res) {
    console.log("Handling POST request... " + Math.round(new Date()/1000));
    res.writeHead(200, {'Content-Type': 'text/html'});

    var body = '';
    req.on('data', function(data){
        body += data;
    });

    req.on('end', function(){
        //console.log(JSON.parse(body));
        res.end('');
        //var steamid = body.provider.steamid;
        //ongoing_matches.put(steamid, body);
        io.emit('news', { matches: JSON.parse(body) });
    });
});

app.use(express.static('./public'));

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("User connected");
  //socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
