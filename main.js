const argv = require('yargs').argv
const { exit } = require('yargs');

const moment = require('moment');
const path = require('path').resolve(__dirname, '../');

const processData = require('./src/process_data');

var month = moment().format('YYYY-MM');
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

const inputFile = path + '/files/2008 CMIT PLANTILLA amb dades.xlsx'
processData.excelToJson(inputFile)


// const csv_path = path + '/files/csv/Turistes/'
// getdata.csvToJson(csv_path, month)