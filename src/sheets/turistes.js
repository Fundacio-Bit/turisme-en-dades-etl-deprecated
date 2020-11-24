const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const arribadaDeTuristes = (data, month) => {
    const { section, initRow, numRows} = table.rows['tourist_arrivals']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const arribadaDeTuristesAcc = (data, month) => {
    const { section, initRow, numRows} = table.rows['tourist_arrivals_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristes = (data, month) => {
    const { section, initRow, numRows} = table.rows['despesa_turistes']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesAcc = (data, month) => {
    const { section, initRow, numRows} = table.rows['despesa_turistes_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesTotal = (data, month) => {
    const { section, initRow, numRows} = table.rows['depesa_turistes_total']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const despesaDelsTuristesTotalAcc = (data, month) => {
    const { section, initRow, numRows} = table.rows['despesa_turistes_total_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacions = (data, month) => {
    const { section, initRow, numRows} = table.rows['pernoctacions']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacionsAcc = (data, month) => {
    const { section, initRow, numRows} = table.rows['pernoctacions_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}

const pernoctacionsPerIlla = (data, month) => {
    const { section, initRow, numRows} = table.rows['pernoctacions_per_illa']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
const pernoctacionsPerIllaAcc = (data, month) => {
    const { section, initRow, numRows} = table.rows['pernoctacions_per_illa_acc']
    var dataObj = generate_json.getDataSingleTable(data, month, section, initRow, numRows, false);
    request.makePost('http://54.77.111.120:5300', dataObj); 
}
module.exports = { 
    arribadaDeTuristes, arribadaDeTuristesAcc, despesaDelsTuristes, despesaDelsTuristesAcc, 
    despesaDelsTuristesTotal, despesaDelsTuristesTotalAcc,
    pernoctacions, pernoctacionsPerIlla, pernoctacionsAcc, pernoctacionsPerIllaAcc};
