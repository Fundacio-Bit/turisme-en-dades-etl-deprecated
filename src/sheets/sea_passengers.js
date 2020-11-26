const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const cruisePassengersArrivalsAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows} = table.rows['cruise_passengers_arrivals_autoritat_portuaria']
  return generate_json.getTableDataECS(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const cruisePassengersArrivalsP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows} = table.rows['cruise_passengers_arrivals_ports']
  return generate_json.getTableDataECS(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const cruisePassengersArrivalsAccAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows} = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']
  return generate_json.getTableDataECSAcc(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const cruisePassengersArrivalsAccP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows} = table.rows['cruise_passengers_arrivals_acc_ports']
  return generate_json.getTableDataECSAcc(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const seaPassengersArrivalsAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows} = table.rows['sea_passengers_arrivals_autoritat_portuaria']
  return generate_json.getDataSeaPassengersArrivalsAP(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const seaPassengersArrivalsP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows } = table.rows['sea_passengers_arrivals_ports']
  const title_row = table.rows['sea_passengers_arrivals_autoritat_portuaria']['initRow'];
  return generate_json.getDataSeaPassengersArrivalsP(data, month, section, chart, titleRow, subTitleRow, initRow, numRows, title_row);
}

const seaPassengersArrivalsAccAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows } = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']
  return generate_json.getDataSeaPassengersArrivalsAP(data, month, section, chart, titleRow, subTitleRow, initRow, numRows);
}

const seaPassengersArrivalsAccP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, initRow, numRows } = table.rows['sea_passengers_arrivals_acc_ports']
  const title_row = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']['initRow']
  return generate_json.getDataSeaPassengersArrivalsP(data, month, section, chart, titleRow, subTitleRow, initRow, numRows, title_row);
}

module.exports = { 
  cruisePassengersArrivalsAP, cruisePassengersArrivalsP, 
  cruisePassengersArrivalsAccAP, cruisePassengersArrivalsAccP,
  seaPassengersArrivalsAP, seaPassengersArrivalsP,
  seaPassengersArrivalsAccAP, seaPassengersArrivalsAccP
 };