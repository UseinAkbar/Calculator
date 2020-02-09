const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})
app.post('/', function(req, res) {

  var num1 = Number(req.body.numb1);
  var num2 = Number(req.body.numb2);
  var result = num1 + num2;

  res.send('The result is ' + result);
})



app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator',function(req, res) {
  var _weight = parseFloat(req.body.weight);
  var _height = parseFloat(req.body.height);

  var bmiResult = _weight / Math.pow(_height, 2);
  var bmiResult2 = Math.round(_weight / Math.pow(_height, 2));

  res.send('Your BMI is ' + bmiResult + ' and equal to ' + bmiResult2);
})
app.get('/about', function(req, res) {
  res.send('This is a BMI Calculator to check your BMI')
})
app.listen(3000, function() {
  console.log('Server is running on port 3000');
})
