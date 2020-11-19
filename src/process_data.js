const XLSX = require("xlsx");

const Turistas = require('./sheets/turistes');
const Ocupacio = require('./sheets/ocupacio');
const Aeri = require('./sheets/aeri');
const Maritim = require('./sheets/maritim');
const Ambiental = require('./sheets/ambiental');
const Social = require('./sheets/social');

const sections = [
    "ecs_occupancy",
    "ecs_air_passengers_arrivals",
    "ecs_sea_passengers_arrivals",
    "ecs_tourist_arrivals",
    "ecs_spending",
    "ens_energy_demand",
    "ens_human_pressure",
    "sos_affiliates",
    "sos_unemployed",
    "sos_temporality",
    "sos_companies",
]

const excelToJson = (inputFile) => {
    const excel = XLSX.readFile(inputFile);
    var sheetNames = excel.SheetNames;
    const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']
    sheetNames.forEach (sheet => {
        switch (sheet) {
            case sections[0]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Turistas.arribadaDeTuristes(datos);
                // Turistas.arribadaDeTuristesAcc(datos);
                // Turistas.despesaDelsTuristes(datos);
                // Turistas.despesaDelsTuristesAcc(datos);
                // Turistas.despesaDelsTuristesTotal(datos);
                // Turistas.despesaDelsTuristesTotalAcc(datos);
                // Turistas.pernoctacions(datos);
                // Turistas.pernoctacionsPerIlla(datos);
                // Turistas.pernoctacionsAcc(datos);
                // Turistas.pernoctacionsPerIllaAcc(datos);
                break;
            case sections[1]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Ocupacio.ocupacioPerPlacesObertes(datos);
                // Ocupacio.ocupacioPerPlacesObertesAcc(datos);
                break;
            case sections[2]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Aeri.air_passengers_arrivals(datos);
                // Aeri.air_passengers_arrivals_acc(datos);
                break;
            case sections[3]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Maritim.cruisePassengersArrivalsAP(datos)
                // Maritim.cruisePassengersArrivalsP(datos)
                // Maritim.cruisePassengersArrivalsAccAP(datos)
                // Maritim.cruisePassengersArrivalsAccP(datos)
                // Maritim.seaPassengersArrivalsAP(datos)
                // Maritim.seaPassengersArrivalsP(datos)
                // Maritim.seaPassengersArrivalsAccAP(datos)
                // Maritim.seaPassengersArrivalsAccP(datos)
                break;
            case sections[4]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Ambiental.energy_demand(datos)
                // Ambiental.human_pressure(datos)
                break;
            case sections[5]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Social.affiliates(datos);
                // Social.unemployed(datos);
                Social.temporality(datos);
                // Social.companies(datos);
                break;
            default:
                console.log("Incorrect sheet");
                break;
      }
      
  })
}

module.exports = { excelToJson };
