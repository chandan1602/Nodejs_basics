console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('Greetings.txt', 'Hello ${user.username}!', function(err) {
if (err) {
  console.log('Unable to open file');
}
});
