const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const affiliates = (data) => {
    const { initRow, initColumn } = table.rows['affiliates']
    var dataObj = generate_json.getTableDataSOS(data, initRow, initColumn);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const unemployed = (data) => {
    const { initRow, numRows } = table.rows['unemployed']
    var dataObj = generate_json.getDataSingleTable(data, initRow, numRows, true);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const temporality = (data) => {
    const { initRow, numRows } = table.rows['temporality']
    var dataObj = generate_json.getDataSingleTable(data, initRow, numRows, true);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const companies = (data) => {
    const { initRow, initColumn } = table.rows['companies']
    var dataObj = generate_json.getTableDataSOS(data, initRow, initColumn);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { affiliates, unemployed, temporality, companies };
