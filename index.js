var express = require('express');
var app = express();

var port = 3000;


app.post('/', function(req, res) {
    console.log("Handling POST request... " + Math.round(new Date()/1000));
    res.writeHead(200, {'Content-Type': 'text/html'});

    var body = '';
    req.on('data', function(data){
        body += data;
    });

    req.on('end', function(){
        console.log("POST payload: " + body);
        res.end('');
    })
});

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
