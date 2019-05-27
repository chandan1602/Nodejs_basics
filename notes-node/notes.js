console.log('Starting notes.js');

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New Note';
// };

// module.exports.add = (a, b) => {
//   var c = a + b;
//   return c;
// }

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);

  }catch (e) {

  }


var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0) {
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}
};
// var duplicateNotes = motes.filter((note) => {
//   return note.title === title;
// });



var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note : ', title);
};

var removeNote = (title) => {
  console.log('Removing note : ', title);
};

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
