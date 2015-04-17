var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400)
  if (req.body.command == '/senso')
  {
    if (req.body.text == 'unity')
    {
      res.send('4.6.1')
    }
    else if (req.body.text == 'xcode')
    {
      res.send('6.3')
    }
    else if (req.body.text == 'android')
    {
      res.send('24.1.2')
    }
    else
    {
      res.send('Unrecognized text')
    }
  }
  else
  {
    res.send('Unrecognized command')
  }
});

app.get('/', function (req, res) {
  res.send('Hi!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
