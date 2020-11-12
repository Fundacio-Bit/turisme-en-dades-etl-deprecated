const argv = require('yargs').argv
const { exit } = require('yargs');

const moment = require('moment');
const path = require('path').resolve(__dirname, '../../');

const ProcessData = require('./ProcessData');

var month = moment().subtract(7,'d').format('YYYY-MM-DD'); // Week ago date
// ----------------------------------------------------
// Read arguments
// ----------------------------------------------------
if (argv.month)
  if (moment(argv.month, "YYYY-MM", true).isValid())
    month = argv.month
  else {
    console.log('ERROR: Invalid month format: ' + argv.month + '. Correct format is: "YYYY-MM-DD"')
    exit()
  }

const inputFile = path + '/files/2008 CMIT PLANTILLA amb dades.xlsx'
ProcessData.excelToJson(inputFile)
