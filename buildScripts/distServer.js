import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));

});

// No need as the app is online on heroku
// app.get('/users', function (req, res) {
//   res.json([
//     {"id":1, "firstName":"Najam", "lastName":"Tariq", "email":"najamulabideen@gmail.com"},
//     {"id":2, "firstName":"Abdul Qudoos", "lastName":"Mehdi", "email":"abdulqudoos@gmail.com"},
//     {"id":3, "firstName":"Rizwan", "lastName":"Haider", "email":"rizwan.seing@gmail.com"}
//   ]);
// });

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
