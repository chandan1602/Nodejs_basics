// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Object destructuring
// var user = {name: 'Chandan', age: 19}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TOdoApp', (err, db) => {
  if (err) {
  return  console.log('Unable to connect to the database Server!')
  }
    console.log('Connected to MongoDB Server!');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //   name: 'Chandan',
    //   Age: 19,
    //   Location: 'Panjab university SSG Regional Center'
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert User', err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })
    db.close();
});
