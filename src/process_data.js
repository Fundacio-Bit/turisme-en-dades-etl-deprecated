const XLSX = require("xlsx");

const Turistas = require('./sheets/turistes');
const Ocupacio = require('./sheets/ocupacio');
const Aeri = require('./sheets/aeri');
const Maritim = require('./sheets/maritim');
const Ambiental = require('./sheets/ambiental');
const Social = require('./sheets/social');

const excelToJson = (inputFile, month) => {
    const excel = XLSX.readFile(inputFile);
    var sheetNames = excel.SheetNames;
    const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']
    sheetNames.forEach (sheet => {
        switch (sheet) {
            case sections[0]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Turistas.arribadaDeTuristes(datos, month);
                // Turistas.arribadaDeTuristesAcc(datos, month);
                // Turistas.despesaDelsTuristes(datos, month);
                // Turistas.despesaDelsTuristesAcc(datos, month);
                // Turistas.despesaDelsTuristesTotal(datos, month);
                // Turistas.despesaDelsTuristesTotalAcc(datos, month);
                // Turistas.pernoctacions(datos, month);
                // Turistas.pernoctacionsPerIlla(datos, month);
                // Turistas.pernoctacionsAcc(datos, month);
                // Turistas.pernoctacionsPerIllaAcc(datos, month);
                break;
            case sections[1]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Ocupacio.ocupacioPerPlacesObertes(datos, month);
                // Ocupacio.ocupacioPerPlacesObertesAcc(datos, month);
                break;
            case sections[2]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Aeri.air_passengers_arrivals(datos, month);
                // Aeri.air_passengers_arrivals_acc(datos, month);
                break;
            case sections[3]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Maritim.cruisePassengersArrivalsAP(datos, month)
                // Maritim.cruisePassengersArrivalsP(datos, month)
                // Maritim.cruisePassengersArrivalsAccAP(datos, month)
                // Maritim.cruisePassengersArrivalsAccP(datos, month)
                // Maritim.seaPassengersArrivalsAP(datos, month)
                // Maritim.seaPassengersArrivalsP(datos, month)
                // Maritim.seaPassengersArrivalsAccAP(datos, month)
                // Maritim.seaPassengersArrivalsAccP(datos, month)
                break;
            case sections[4]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Ambiental.energy_demand(datos, month)
                // Ambiental.human_pressure(datos, month)
                break;
            case sections[5]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                // Social.affiliates(datos, month);
                // Social.unemployed(datos, month);
                // Social.temporality(datos, month);
                // Social.companies(datos, month);
                break;
            default:
                console.log("Incorrect sheet");
                break;
      }
      
  })
}

module.exports = { excelToJson };
