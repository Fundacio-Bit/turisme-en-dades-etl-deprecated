const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const affiliates = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['affiliates']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const unemployed = (data, month) => {
    const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['unemployed']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const temporality = (data, month) => {
    const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['temporality']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const companies = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['companies']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

module.exports = { affiliates, unemployed, temporality, companies };
