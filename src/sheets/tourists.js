const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const touristArrivals = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['tourist_arrivals']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}
  
const touristArrivalsAcc = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['tourist_arrivals_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spending = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingAcc = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingTotal = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_total']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingTotalAcc = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_total_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingStays = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_stays']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingStaysAcc = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_stays_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}

const spendingStaysIslands = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_stays_islands']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}
const spendingStaysIslandsAcc = (data, month) => {
    const { section, chart, initRow, numRows} = table.rows['spending_stays_islands_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, initRow, numRows, false);
}
module.exports = { 
    touristArrivals, touristArrivalsAcc, spending, spendingAcc, 
    spendingTotal, spendingTotalAcc,
    spendingStays, spendingStaysIslands, spendingStaysAcc, spendingStaysIslandsAcc};
