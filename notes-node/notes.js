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

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);

  }catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  // console.log('File saved Successfully');
  return note;
}else {
  // console.log('Error: Same name of title spotted');
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
  var notes = fetchNotes();
  var filteredNotes =  notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote,
};
