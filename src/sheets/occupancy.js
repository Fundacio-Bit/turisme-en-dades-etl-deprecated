const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const occupancy = (data, month) => {
  const { section, initRow, numRows} = table.rows['occupancy']
  return generate_json.getDataOccupancy(data, month, section, initRow, numRows);
}
  
const occupancyAcc = (data, month) => {
  const { section, initRow, numRows} = table.rows['occupancy_acc']
  return generate_json.getDataOccupancyAcc(data, month, section, initRow, numRows);
}


module.exports = { occupancy, occupancyAcc };