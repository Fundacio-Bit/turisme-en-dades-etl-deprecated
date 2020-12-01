const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const energy_demand = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['energy_demand']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const human_pressure = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

module.exports = { energy_demand, human_pressure };
