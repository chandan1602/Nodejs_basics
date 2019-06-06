var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TOdoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

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

//User=>
//email-require it - trim it - set type - set min length of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    required: true,
    minlength: 1
  }
});

var User1 = new User({
  email: 'skynet9054@gmail.com   '
})

User1.save().then((doc) => {
  console.log('Email saved successfully', doc);
}, (e) => {
  console.log('Err!! : ',e);
})
