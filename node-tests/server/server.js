const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
})

app.get('/users', (req, res) => {
  res.send([{
    name: 'Chandan',
    age: 19
  }
, {
  name: 'Manaalee',
  age: 23
}, {
  name: 'Harsh',
  age: 19
}]);
});


app.listen(3000);
module.exports.app = app;
