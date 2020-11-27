const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const energy_demand = (data, month) => {
    const {section, chart, titleRow, columnRow, dataRows, footerRow } = table.rows['energy_demand']
    return generate_json.getTableAcc(data, month, section, chart, titleRow, columnRow, dataRows, footerRow, true);
}
  
const human_pressure = (data, month) => {
    const {section, chart, titleRow, columnRow, dataRows, footerRow } = table.rows['human_pressure']
    return generate_json.getTableAcc(data, month, section, chart, titleRow, columnRow, dataRows, footerRow, false);
}

module.exports = { energy_demand, human_pressure };
