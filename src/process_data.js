const XLSX = require("xlsx");

const Turistas = require('./sheets/turistes');
const Ocupacio = require('./sheets/ocupacio');
const Aeri = require('./sheets/aeri');

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
                // Aeri.passatgers_aeris(datos);
                Aeri.passatgers_aeris_acc(datos);
                break;
            case sections[3]:
                console.log(sheet)
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
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

      }
      
  })
}

module.exports = { excelToJson };
