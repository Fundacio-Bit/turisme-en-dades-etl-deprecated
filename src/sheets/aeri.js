const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const air_passengers_arrivals = (data, month) => {
    const { section, initRow, numRows} = table.rows['air_passengers_arrivals']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const air_passengers_arrivals_acc = (data, month) => {
    const { section, initRow, numRows} = table.rows['air_passengers_arrivals_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { air_passengers_arrivals, air_passengers_arrivals_acc };
