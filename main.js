const argv = require('yargs').argv
const { exit } = require('yargs');

const moment = require('moment');

const processData = require('./src/process_data');

var month = moment().format('YYYY-MM');
var filename = '';
// ----------------------------------------------------
// Read arguments
// ----------------------------------------------------
if (argv.month)
  if (moment(argv.month, "YYYY-MM", true).isValid())
    month = argv.month
  else {
    console.log('ERROR: Invalid month format: ' + argv.month + '. Correct format is: "YYYY-MM"')
    exit()
  }

if (argv.file)
    filename = argv.file
else {
    console.log('You must enter input file name: --file=<my_file>')
    exit()
}

if (argv.mode)
  var baseUrl = 'http://localhost:5300'
else {
  var baseUrl = 'http://54.77.111.120:5300'
}

const inputFile = require('path').resolve(__dirname, '../') + '/files/excel/' + filename
processData.excelToJson(inputFile, month, baseUrl)
