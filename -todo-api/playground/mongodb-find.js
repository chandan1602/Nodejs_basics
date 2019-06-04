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

    // db.collection('Todos').find({
    //   _id: new ObjectID('5cf644997217305928af6ad5')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`)
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

db.collection('Users').find({name: 'Chandan'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Todos', err);
});

    // db.close();
});
