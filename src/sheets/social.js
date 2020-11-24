const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const affiliates = (data, month) => {
    const { section, initRow, initColumn } = table.rows['affiliates']
    var dataObj = generate_json.getTableDataSOS(data, month, section, initRow, initColumn);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const unemployed = (data, month) => {
    const { section, initRow, numRows } = table.rows['unemployed']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, true);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const temporality = (data, month) => {
    const { section, initRow, numRows } = table.rows['temporality']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, true);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const companies = (data, month) => {
    const { section, initRow, initColumn } = table.rows['companies']
    var dataObj = generate_json.getTableDataSOS(data, month, section, initRow, initColumn);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { affiliates, unemployed, temporality, companies };
