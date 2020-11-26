const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const occupancy = (data, month) => {
  const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['occupancy']
  return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const occupancyAcc = (data, month) => {
  const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['occupancy_acc']
  return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}


module.exports = { occupancy, occupancyAcc };