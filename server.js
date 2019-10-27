const serialPort = require('serialport');
const express = require('express');
const bodyParser = require('body-parser');
const readline = require('@serialport/parser-readline');

var value = [];

const serial = new serialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = new readline();
serial.pipe(parser);
parser.on('data', function(line) {
    var digital_data = line.slice(0, 27);
    var analog_data = line.slice(28, -1);
    var digital = digital_data.replace(/, +/g, ",").split(",").map(Number);
    var analog = analog_data.replace(/, +/g, ",").split(",").map(Number);
    let data = {
        "d": digital,
        "a0": analog[0],
        "a1": analog[1],
        "a2": analog[2],
        "a3": analog[3],
        "a4": analog[4],
        "a5": analog[5],
    }
    value.push(data);
    if(value.length > 5) {
        value.shift();
    }
    console.log(analog[5]);
});

const app = express();
app.use(bodyParser.json());

app.get('/values', function(req, res) {
    res.json(value);
});

const port = process.env.PORT || 3500;
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
