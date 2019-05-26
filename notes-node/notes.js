console.log('Starting notes.js');

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New Note';
// };

// module.exports.add = (a, b) => {
//   var c = a + b;
//   return c;
// }

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

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
