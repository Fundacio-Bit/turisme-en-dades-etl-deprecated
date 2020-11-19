const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const energy_demand = (data) => {
    const {titleRow, columnRow, dataRows } = table.rows['energy_demand']
    var dataObj = generate_json.getTableAcc(data, titleRow, columnRow, dataRows, true);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const human_pressure = (data) => {
    const {titleRow, columnRow, dataRows } = table.rows['human_pressure']
    var dataObj = generate_json.getTableAcc(data, titleRow, columnRow, dataRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { energy_demand, human_pressure };
