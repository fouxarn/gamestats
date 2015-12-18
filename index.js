var http = require('http');

var host = '0.0.0.0';
var port = 3000;

// Taken from valve developer wiki
postServer = http.createServer(function(req, res){
    if (req.method == 'POST') {
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
    } else {
        console.log("Not expecting other request types...");
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = 'ok';
        res.end(html);
    }
});

postServer.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
