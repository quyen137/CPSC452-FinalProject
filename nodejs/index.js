var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var fs = require('fs');

// Input your key and cert
var options = {
    key: fs.readFileSync('CPSC452.key'),
    cert: fs.readFileSync('CPSC452.crt')
};

app.get('/',function(req, res){
    res.send('Without Crt');
});

http.createServer(app).listen(8080, function(){
    console.log('HTTP Listening on 8080');
});

https.createServer(options,app).listen(443,function(){
    console.log('HTTP Listening on 443');
});
