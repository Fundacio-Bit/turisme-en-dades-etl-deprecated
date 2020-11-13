const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const passatgers_aeris = (data) => {
    const init_row = table.rows['passatgers_aeris']['initRow']
    const num_rows = table.rows['passatgers_aeris']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    console.log(JSON.stringify(dataObj));
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const passatgers_aeris_acc = (data) => {
    const init_row = table.rows['passatgers_aeris_acc']['initRow']
    const num_rows = table.rows['passatgers_aeris_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    console.log(JSON.stringify(dataObj));
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { passatgers_aeris, passatgers_aeris_acc };
