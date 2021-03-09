const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const energy_demand = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['energy_demand']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const human_pressure_ib = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure_ib']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const human_pressure_mallorca = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure_mallorca']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
const human_pressure_menorca = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure_menorca']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
const human_pressure_ibiza = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure_ibiza']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
const human_pressure_formentera = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows } = table.rows['human_pressure_formentera']
    return generate_json.generateDataGrid(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
module.exports = { energy_demand, human_pressure_ib, human_pressure_mallorca, human_pressure_menorca, human_pressure_ibiza, human_pressure_formentera };
