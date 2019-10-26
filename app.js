const serialPort = require('serialport');
const express = require('express');
const bodyParser = require('body-parser');
const readline = require('@serialport/parser-readline');

var value = '0';

const serial = new serialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = new readline();
serial.pipe(parser);
parser.on('data', function(line) {
    value = line.slice(0, -1);
});

const app = express();
app.use(bodyParser.json());

app.get('/values', function(req, res) {
    res.json({"value": value.toString()});
});

const port = process.env.PORT || 3500;
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
