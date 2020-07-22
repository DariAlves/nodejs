const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs= require('fs');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var total = num1 + num2;
    res.send(`<h2>The result of the calculation is: ${total}</h2>`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(path.join(__dirname + '/bmiCalculator.html'));
});

app.post('/bmicalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = (weight / (height * height)).toFixed(2);
    res.send(`<h2>Your BMI is: ${bmi}</h2>`)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
