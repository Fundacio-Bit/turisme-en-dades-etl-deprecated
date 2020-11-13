const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const cruisePassengersArrivalsAP = (data) => {
  const init_row = table.rows['cruise_passengers_arrivals_autoritat_portuaria']['initRow']
  const num_rows = table.rows['cruise_passengers_arrivals_autoritat_portuaria']['numRows']
  var dataObj = generate_json.getDataDoubleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsP = (data) => {
  const init_row = table.rows['cruise_passengers_arrivals_ports']['initRow']
  const num_rows = table.rows['cruise_passengers_arrivals_ports']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsAccAP = (data) => {
  const init_row = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']['initRow']
  const num_rows = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}


const cruisePassengersArrivalsAccP = (data) => {
  const init_row = table.rows['cruise_passengers_arrivals_acc_ports']['initRow']
  const num_rows = table.rows['cruise_passengers_arrivals_acc_ports']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAP = (data) => {
  const init_row = table.rows['sea_passengers_arrivals_autoritat_portuaria']['initRow']
  const num_rows = table.rows['sea_passengers_arrivals_autoritat_portuaria']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsP = (data) => {
  const init_row = table.rows['sea_passengers_arrivals_ports']['initRow']
  const num_rows = table.rows['sea_passengers_arrivals_ports']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccAP = (data) => {
  const init_row = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']['initRow']
  const num_rows = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccP = (data) => {
  const init_row = table.rows['sea_passengers_arrivals_acc_ports']['initRow']
  const num_rows = table.rows['sea_passengers_arrivals_acc_ports']['numRows']
  var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
  console.log(JSON.stringify(dataObj));
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { 
  cruisePassengersArrivalsAP, cruisePassengersArrivalsP, 
  cruisePassengersArrivalsAccAP, cruisePassengersArrivalsAccP,
  seaPassengersArrivalsAP, seaPassengersArrivalsP,
  seaPassengersArrivalsAccAP, seaPassengersArrivalsAccP
 };