const XLSX = require("xlsx");

const Turistas = require('./sheets/turistes');
const Ocupacio = require('./sheets/ocupacio');
const Aeri = require('./sheets/aeri');
const Maritim = require('./sheets/maritim');

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
                Maritim.seaPassengersArrivalsAP(datos)
                Maritim.seaPassengersArrivalsP(datos)
                Maritim.seaPassengersArrivalsAccAP(datos)
                Maritim.seaPassengersArrivalsAccP(datos)
                break;
            case sections[4]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                break;
            case sections[5]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                break;
            default:
                console.log("Incorrect sheet");
                break;
      }
      
  })
}

module.exports = { excelToJson };
