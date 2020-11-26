const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const affiliates = (data, month) => {
    const { section, chart, titleRow, initRow, initColumn } = table.rows['affiliates']
    return generate_json.getTableDataSOS(data, month, section, chart, titleRow, initRow, initColumn);
}
  
const unemployed = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['unemployed']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const temporality = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['temporality']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const companies = (data, month) => {
    const { section, chart, titleRow, initRow, initColumn } = table.rows['companies']
    return generate_json.getTableDataSOS(data, month, section, chart, titleRow, initRow, initColumn);
}

module.exports = { affiliates, unemployed, temporality, companies };
