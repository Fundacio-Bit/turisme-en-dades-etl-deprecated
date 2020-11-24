const XLSX = require("xlsx");
const request = require('./utils/axios_requests')


const Tourists = require('./sheets/tourists');
const Occupancy = require('./sheets/occupancy');
const AirPassengers = require('./sheets/air_passengers');
const SeaPassengers = require('./sheets/sea_passengers');
const Ambiental = require('./sheets/ambiental');
const Social = require('./sheets/social');
const sections=require('./json/sheets_json').sections;

const excelToJson = (inputFile, month, baseUrl) => {
    const excel = XLSX.readFile(inputFile);
    var sheetNames = excel.SheetNames;
    sheetNames.forEach (sheet => {
        switch (sheet) {
            case sections[0]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                request.makePost(baseUrl, Tourists.touristArrivals(datos, month)); 
                request.makePost(baseUrl, Tourists.touristArrivalsAcc(datos, month));
                request.makePost(baseUrl, Tourists.spending(datos, month));
                request.makePost(baseUrl, Tourists.spendingAcc(datos, month));
                request.makePost(baseUrl, Tourists.spendingTotal(datos, month));
                request.makePost(baseUrl, Tourists.spendingTotalAcc(datos, month));
                request.makePost(baseUrl, Tourists.spendingStays(datos, month));
                request.makePost(baseUrl, Tourists.spendingStaysIslands(datos, month));
                request.makePost(baseUrl, Tourists.spendingStaysAcc(datos, month));
                request.makePost(baseUrl, Tourists.spendingStaysIslandsAcc(datos, month));
                break;
            case sections[1]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // request.makePost(baseUrl, Occupancy.occupancy(datos, month));
                // request.makePost(baseUrl, Occupancy.occupancyAcc(datos, month));
                break;
            case sections[2]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // request.makePost(baseUrl, AirPassengers.air_passengers_arrivals(datos, month));
                // request.makePost(baseUrl, AirPassengers.air_passengers_arrivals_acc(datos, month));
                break;
            case sections[3]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // request.makePost(baseUrl, SeaPassengers.cruisePassengersArrivalsAP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.cruisePassengersArrivalsP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.cruisePassengersArrivalsAccAP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.cruisePassengersArrivalsAccP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.seaPassengersArrivalsAP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.seaPassengersArrivalsP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.seaPassengersArrivalsAccAP(datos, month))
                // request.makePost(baseUrl, SeaPassengers.seaPassengersArrivalsAccP(datos, month))
                break;
            case sections[4]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // request.makePost(baseUrl, Ambiental.energy_demand(datos, month))
                // request.makePost(baseUrl, Ambiental.human_pressure(datos, month))
                break;
            case sections[5]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // request.makePost(baseUrl, Social.affiliates(datos, month));
                // request.makePost(baseUrl, Social.unemployed(datos, month));
                // request.makePost(baseUrl, Social.temporality(datos, month));
                // request.makePost(baseUrl, Social.companies(datos, month));
                break;
            default:
                break;
      }
  })
}

module.exports = { excelToJson };
