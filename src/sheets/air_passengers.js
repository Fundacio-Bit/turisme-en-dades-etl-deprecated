const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const air_passengers_arrivals = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['air_passengers_arrivals']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const air_passengers_arrivals_acc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['air_passengers_arrivals_acc']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

module.exports = { air_passengers_arrivals, air_passengers_arrivals_acc };
