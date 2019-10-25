const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
var value = '';

const parser = new Readline();
port.pipe(parser);

parser.on('data', function(line) {
    value = line;
    console.log(line);
})