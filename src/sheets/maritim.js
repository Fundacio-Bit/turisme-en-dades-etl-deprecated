const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const cruisePassengersArrivalsAP = (data) => {
  const { init_row, num_rows} = table.rows['cruise_passengers_arrivals_autoritat_portuaria']
  var dataObj = generate_json.getDataDoubleTable(data, init_row, num_rows, null);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsP = (data) => {
  const { init_row, num_rows} = table.rows['cruise_passengers_arrivals_ports']
  var dataObj = generate_json.getDataDoubleTable(data, init_row, num_rows, null);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const cruisePassengersArrivalsAccAP = (data) => {
  const { init_row, num_rows} = table.rows['cruise_passengers_arrivals_acc_autoritat_portuaria']
  var dataObj = generate_json.getDataDoubleTable(data, init_row, num_rows, 14);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}


const cruisePassengersArrivalsAccP = (data) => {
  const { init_row, num_rows} = table.rows['cruise_passengers_arrivals_acc_ports']
  var dataObj = generate_json.getDataDoubleTable(data, init_row, num_rows, 14);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAP = (data) => {
  const { init_row, num_rows} = table.rows['sea_passengers_arrivals_autoritat_portuaria']
  var dataObj = generate_json.getDataSeaPassengersArrivalsAP(data, init_row, num_rows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsP = (data) => {
  const { init_row, num_rows } = table.rows['sea_passengers_arrivals_ports']
  const title_row = table.rows['sea_passengers_arrivals_autoritat_portuaria']['initRow'];
  var dataObj = generate_json.getDataSeaPassengersArrivalsP(data, init_row, num_rows, title_row);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccAP = (data) => {
  const { init_row, num_rows } = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']
  var dataObj = generate_json.getDataSeaPassengersArrivalsAP(data, init_row, num_rows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

const seaPassengersArrivalsAccP = (data) => {
  const { init_row, num_rows } = table.rows['sea_passengers_arrivals_acc_ports']
  const title_row = table.rows['sea_passengers_arrivals_acc_autoritat_portuaria']['initRow']
  var dataObj = generate_json.getDataSeaPassengersArrivalsP(data, init_row, num_rows, title_row);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}

module.exports = { 
  cruisePassengersArrivalsAP, cruisePassengersArrivalsP, 
  cruisePassengersArrivalsAccAP, cruisePassengersArrivalsAccP,
  seaPassengersArrivalsAP, seaPassengersArrivalsP,
  seaPassengersArrivalsAccAP, seaPassengersArrivalsAccP
 };