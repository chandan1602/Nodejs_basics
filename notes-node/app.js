console.log('Starting app.js');

// const fs = require('fs');
// const os = require('os');
// const _=require('lodash');
// const notes = require('./notes.js');
//
// var user = os.userInfo();
// console.log(user);
//
// // var res = notes.addNote();
// // console.log(res);
//
// // fs.appendFile('Greetings.txt', 'Hello ${user.username}! You are ' + notes.age, function(err) {
// // if (err) {
// //   console.log('Unable to open file');
// // }
// // });
//
// var total = notes.add(2,3);
// console.log(total);
//
//
// console.log(_.isString(true));
// console.log(_.isString('Chandan'));
//
// var filteredArray = _.uniq(['Chandan', 1, 'Chandan', 1, 2, 3, 4, 5]);
// console.log(filteredArray);

const fs = require('fs');
const _=require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note){
  console.log('Note saved Successfully');
  console.log('--');
  console.log('Title : ', note.title);
  console.log('Body : ', note.body);
  }
  else {
    console.log('Error: Same name of title spotted');
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Not recognised');
}
