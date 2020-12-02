const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const cruisePassengersArrivalsAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['cruise_passengers_arrivals_autoritat_portuaria']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const cruisePassengersArrivalsP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['cruise_passengers_arrivals_ports']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const cruisePassengersArrivalsAccAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const cruisePassengersArrivalsAccP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['cruise_passengers_arrivals_acc_ports']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const seaPassengersArrivalsAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows } = table.rows['sea_passengers_arrivals_autoritat_portuaria']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const seaPassengersArrivalsP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows  } = table.rows['sea_passengers_arrivals_ports']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const seaPassengersArrivalsAccAP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows  } = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

const seaPassengersArrivalsAccP = (data, month) => {
  const { section, chart, titleRow, subTitleRow, columnRow, footerRow, rows  } = table.rows['sea_passengers_arrivals_acc_ports']
  return generate_json.generateDataGrid(data, month, section, chart, titleRow, subTitleRow, columnRow, footerRow, rows);
}

module.exports = { 
  cruisePassengersArrivalsAP, cruisePassengersArrivalsP, 
  cruisePassengersArrivalsAccAP, cruisePassengersArrivalsAccP,
  seaPassengersArrivalsAP, seaPassengersArrivalsP,
  seaPassengersArrivalsAccAP, seaPassengersArrivalsAccP
 };