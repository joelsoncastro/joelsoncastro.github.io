const express = require('express');
const app = express();
 
const server = app.listen(process.env.PORT || 5001, function () {
  console.log("Server active on port " + (process.env.PORT || 5001));
});


app.set('view engine', 'ejs');
app.use(express.static('public'));
  
 
app.get('/', function (req, res) {
 
  res.render('index');
});

app.get('/newindex', function (req, res) {
 
  res.render('newindex');
});

 
 