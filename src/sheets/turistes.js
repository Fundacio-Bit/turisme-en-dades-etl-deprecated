const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const arribadaDeTuristes = (data) => {
    const init_row = table.rows['tourist_arrivals']['initRow']
    const num_rows = table.rows['tourist_arrivals']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const arribadaDeTuristesAcc = (data) => {
    const init_row = table.rows['tourist_arrivals_acc']['initRow']
    const num_rows = table.rows['tourist_arrivals_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristes = (data) => {
    const init_row = table.rows['despesa_turistes']['initRow']
    const num_rows = table.rows['despesa_turistes']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesAcc = (data) => {
    const init_row = table.rows['despesa_turistes_acc']['initRow']
    const num_rows = table.rows['despesa_turistes_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesTotal = (data) => {
    const init_row = table.rows['depesa_turistes_total']['initRow']
    const num_rows = table.rows['depesa_turistes_total']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesTotalAcc = (data) => {
    const init_row = table.rows['despesa_turistes_total_acc']['initRow']
    const num_rows = table.rows['despesa_turistes_total_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacions = (data) => {
    const init_row = table.rows['pernoctacions']['initRow']
    const num_rows = table.rows['pernoctacions']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacionsAcc = (data) => {
    const init_row = table.rows['pernoctacions_acc']['initRow']
    const num_rows = table.rows['pernoctacions_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacionsPerIlla = (data) => {
    const init_row = table.rows['pernoctacions_per_illa']['initRow']
    const num_rows = table.rows['pernoctacions_per_illa']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
const pernoctacionsPerIllaAcc = (data) => {
    const init_row = table.rows['pernoctacions_per_illa_acc']['initRow']
    const num_rows = table.rows['pernoctacions_per_illa_acc']['numRows']
    var dataObj = generate_json.getDataSingleTable(data, init_row, num_rows);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
module.exports = { 
    arribadaDeTuristes, arribadaDeTuristesAcc, despesaDelsTuristes, despesaDelsTuristesAcc, 
    despesaDelsTuristesTotal, despesaDelsTuristesTotalAcc,
    pernoctacions, pernoctacionsPerIlla, pernoctacionsAcc, pernoctacionsPerIllaAcc};
