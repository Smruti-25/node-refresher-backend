const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const userName = encodeURIComponent("smrutikarade");
const password = encodeURIComponent("w#$xk5#YXRPTX6C");
const uri = `mongodb+srv://${userName}:${password}@cluster0.wouuyrt.mongodb.net/?retryWrites=true&w=majority`


// const mongoConnect = (callback) => {
//   MongoClient.connect(uri)
//     .then(client => {
//       console.log('Connected!');
//       callback(client);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = uri;
