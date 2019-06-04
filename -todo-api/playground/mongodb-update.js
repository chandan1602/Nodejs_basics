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

   // db.collection('Todos').findOneAndUpdate({
   //   _id: new ObjectID('5cf64ecdd33f1362a0076b0a')
   // }, {
   //   $set: {
   //     completed: false
   //   }
   // }, {
   //   returnOriginal: true
   // }).then((result) => {
   //   console.log(result);
   // })

   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5cf66986d33f1362a00776b7')
   }, {
     $set: {
       name: 'Bond'
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: 'Chandan'
   }).then((result) => {
     console.log(result);
   })

   // db.collection('Users').update({
   //  _id: new ObjectID('5cf66986d33f1362a00776b7')
   // }, {$inc: {age: 1}}).then((result) => {
   //   console.log(result);
   // })

    // db.close();
});
