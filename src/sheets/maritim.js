const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const cruisePassengersArrivalsAP = (data, month) => {
  const { section, initRow, numRows} = table.rows['cruise_passengers_arrivals_autoritat_portuaria']
  var dataObj = generate_json.getTableDataECS(data, month, section, initRow, numRows, null);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsP = (data, month) => {
  const { section, initRow, numRows} = table.rows['cruise_passengers_arrivals_ports']
  var dataObj = generate_json.getTableDataECS(data, month, section, initRow, numRows, null);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsAccAP = (data, month) => {
  const { section, initRow, numRows} = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']
  var dataObj = generate_json.getTableDataECSAcc(data, month, section, initRow, numRows, 14);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}


const cruisePassengersArrivalsAccP = (data, month) => {
  const { section, initRow, numRows} = table.rows['cruise_passengers_arrivals_acc_ports']
  var dataObj = generate_json.getTableDataECSAcc(data, month, section, initRow, numRows, 14);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAP = (data, month) => {
  const { section, initRow, numRows} = table.rows['sea_passengers_arrivals_autoritat_portuaria']
  var dataObj = generate_json.getDataSeaPassengersArrivalsAP(data, month, section, initRow, numRows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsP = (data, month) => {
  const { section, initRow, numRows } = table.rows['sea_passengers_arrivals_ports']
  const title_row = table.rows['sea_passengers_arrivals_autoritat_portuaria']['initRow'];
  var dataObj = generate_json.getDataSeaPassengersArrivalsP(data, month, section, initRow, numRows, title_row);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccAP = (data, month) => {
  const { section, initRow, numRows } = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']
  var dataObj = generate_json.getDataSeaPassengersArrivalsAP(data, month, section, initRow, numRows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccP = (data, month) => {
  const { section, initRow, numRows } = table.rows['sea_passengers_arrivals_acc_ports']
  const title_row = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']['initRow']
  var dataObj = generate_json.getDataSeaPassengersArrivalsP(data, month, section, initRow, numRows, title_row);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { 
  cruisePassengersArrivalsAP, cruisePassengersArrivalsP, 
  cruisePassengersArrivalsAccAP, cruisePassengersArrivalsAccP,
  seaPassengersArrivalsAP, seaPassengersArrivalsP,
  seaPassengersArrivalsAccAP, seaPassengersArrivalsAccP
 };