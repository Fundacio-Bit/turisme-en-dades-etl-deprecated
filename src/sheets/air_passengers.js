const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const air_passengers_arrivals = (data, month) => {
    const { section, initRow, numRows} = table.rows['air_passengers_arrivals']
    return generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
}
  
const air_passengers_arrivals_acc = (data, month) => {
    const { section, initRow, numRows} = table.rows['air_passengers_arrivals_acc']
    return generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
}

module.exports = { air_passengers_arrivals, air_passengers_arrivals_acc };
