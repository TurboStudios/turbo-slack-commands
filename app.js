/*jslint node: true */

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var url = "https://s3.amazonaws.com/turbo.turbostudios.com/data/tool-versions.json";
var toolVersions = {};

request({url: url, json: true}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        for (var i=0; i<body.length; i++) {
            toolVersions[body[i].id] = body[i];
        }
    }
});

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) { return res.sendStatus(400); }
    if (req.body.command === '/senso') {
        var text = req.body.text.toLowerCase();
        if (toolVersions[text] !== null) {
            res.send(toolVersions[text].version);
        } else {
            res.send('Unrecognized text');
        }
    } else {
        res.send('Unrecognized command');
    }
});

app.get('/', function (req, res) {
    res.send('Turbo Slack Commands');
});

app.get('/tool-versions', function (req, res) {
    res.sendFile(__dirname + '/tool-versions.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});