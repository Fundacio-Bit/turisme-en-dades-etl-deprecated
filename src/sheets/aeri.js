const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const air_passengers_arrivals = (data) => {
    const init_row = table.rows['air_passengers_arrivals']['initRow']
    const num_rows = table.rows['air_passengers_arrivals']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    console.log(JSON.stringify(dataObj));
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const air_passengers_arrivals_acc = (data) => {
    const init_row = table.rows['air_passengers_arrivals_acc']['initRow']
    const num_rows = table.rows['air_passengers_arrivals_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    console.log(JSON.stringify(dataObj));
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { air_passengers_arrivals, air_passengers_arrivals_acc };
