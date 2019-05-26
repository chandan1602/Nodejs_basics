console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _=require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);

// var res = notes.addNote();
// console.log(res);

// fs.appendFile('Greetings.txt', 'Hello ${user.username}! You are ' + notes.age, function(err) {
// if (err) {
//   console.log('Unable to open file');
// }
// });

var total = notes.add(2,3);
console.log(total);


console.log(_.isString(true));
console.log(_.isString('Chandan'));

var filteredArray = _.uniq(['Chandan', 1, 'Chandan', 1, 2, 3, 4]);
console.log(filteredArray);
