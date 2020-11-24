const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const affiliates = (data, month) => {
    const { section, initRow, initColumn } = table.rows['affiliates']
    return generate_json.getTableDataSOS(data, month, section, initRow, initColumn);
}
  
const unemployed = (data, month) => {
    const { section, initRow, numRows } = table.rows['unemployed']
    return generate_json.getDataSingleTable(data, month, section, initRow, numRows, true);
}

const temporality = (data, month) => {
    const { section, initRow, numRows } = table.rows['temporality']
    return generate_json.getDataSingleTable(data, month, section, initRow, numRows, true);
}

const companies = (data, month) => {
    const { section, initRow, initColumn } = table.rows['companies']
    return generate_json.getTableDataSOS(data, month, section, initRow, initColumn);
}

module.exports = { affiliates, unemployed, temporality, companies };
