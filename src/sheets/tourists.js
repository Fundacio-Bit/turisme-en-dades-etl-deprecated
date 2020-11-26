const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');

const touristArrivals = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['tourist_arrivals']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
  
const touristArrivalsAcc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['tourist_arrivals_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spending = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingAcc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingTotal = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_total']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingTotalAcc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_total_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingStays = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_stays']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingStaysAcc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_stays_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}

const spendingStaysIslands = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_stays_islands']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
const spendingStaysIslandsAcc = (data, month) => {
    const { section, chart, titleRow, columnRow, footerRow, rows} = table.rows['spending_stays_islands_acc']
    return generate_json.getDataSingleTable(data, month, section, chart, titleRow, null, columnRow, footerRow, rows);
}
module.exports = { 
    touristArrivals, touristArrivalsAcc, spending, spendingAcc, 
    spendingTotal, spendingTotalAcc,
    spendingStays, spendingStaysIslands, spendingStaysAcc, spendingStaysIslandsAcc};
