// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Object destructuring
// var user = {name: 'Chandan', age: 19}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TOdoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to the database Server!')
  }
    console.log('Connected to MongoDB Server!');

   //deleteMany
    // db.collection('Todos').deleteMany({
    //   text: 'Eat lunch'
    // }).then((result) => {
    //   console.log(result);
    // });
   //deleteOne
   // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
   //   console.log('Record Deleted!!', result)
   // })

   //findOneAndDelete
   // db.collection('Todos').findOneAndDelete({
   //   completed: false
   // }).then((result) => {
   //   console.log(result);
   // })

   //Challenge
   // db.collection('Users').findOneAndDelete({_id: new ObjectID('5cf64673cd2d63658048b79b')}).then((result) => {
   //   console.log(result);
   // });

   db.collection('Users').deleteMany({name: 'Chandan'}).then((result) => {
     console.log(result);
   });

    // db.close();
});
