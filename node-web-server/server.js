const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = '${now}: ${req.method} ${req.originalUrl}';
  console.log(now, req.method, req.originalUrl);
  fs.appendFile('Server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

app.use((req, res, next) => {
res.render('maintanance.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
// hbs.registerHelper('screamIt', (text) => {
//   return toUpperCase(text);
// });

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'HomePage',
    WelcomeMessage: 'Welcome to HomePage'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    title: 'Error 404',
    Description: 'Please check your Internet Connection'
  });
});

app.listen(port, () => {
  console.log('Server is up on port', port);
});
