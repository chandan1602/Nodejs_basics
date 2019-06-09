var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());     //Middleware

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then(() => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log('Started on Port 3000');
});

module.exports = {app};
// var newTodo = new Todo({
//   text: 'Cook Dinner',
//   completed: true
// });
//
// var Todo2 = new Todo({
//   text: '  Edit this video  '
//   // completed: true,
//   // completedAt: 9
// })

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });
//
// Todo2.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

// var User1 = new User({
//   email: 'skynet9054@gmail.com   '
// })
//
// User1.save().then((doc) => {
//   console.log('Email saved successfully', doc);
// }, (e) => {
//   console.log('Err!! : ',e);
// })
