/*
var http = require('http');
var server = http.createServer(function(req, res){
   res.writeHead(200, {'Content-type': 'text/plain'});
   res.end('Hello world\n');
});

server.listen(8000);
console.log('Server is ready!');



var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello world')
});

app.listen(8000);

var express = require('express');
var app = express();

app.get('/greeting', (req, res) => {
   let greetText = req.query.str1 + " " + req.query.str2
   res.send(`<html><h1 style="align:center;">${greetText}</h1></body></html>`)
})

app.listen(8000);
var express = require('express');
var app = express();

app.get('/greeting/:str1/:str2', (req, res) => {
  console.log(req)
  let greetText = req.params.str1 + " " + req.params.str2
  res.send(`<html><h1 style="align:center;">Hey: ${greetText}</h1></body></html>`)
})

app.listen(8000);
var express = require('express'),
   app = express(),
   bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/add', urlencodedParser, function(req, res){
   var result = parseInt(req.body.a) + parseInt(req.body.b);
   res.send('Result = ' + result);
});

app.listen(8000);


var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser('keyboard cat')) //‘keyboard cat’ is a secret key to sign cookie (prevent cookie tamper)
app.get('/ck_get', function(req, res) {
   res.send(req.cookies)
})

app.get('/ck_set', function(req, res) {
   res.cookie('a', 10)
   res.send('ok')
})

app.listen(8000)




var express = require('express')
var app = express()
var session = require('express-session')

                         // sign cookie (for a session)
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
   resave : false, saveUninitialized: false }))
   // resave => Forces the session to be saved back to the session store, even if the session was never modified 
   // saveUninitialized => the cookie will not be set on a response with an uninitialized session

app.use(function(req, res, next) {
   var sess = req.session
   if (sess.views) {
       sess.views++
   } else {
       sess.views = 1
   }
   console.log(sess.views)
   next();
})
app.get('/',function(req, res) {
   res.send('count =' + req.session.views)
})
app.listen(8000)

*/
var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('image'))

app.get('/computer', function(req, res){
   res.render('fruit', {computers: ['Window','OSX','Android','IOS'] })
})

app.listen(8000)
