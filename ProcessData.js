const XLSX = require("xlsx");

const Turistas = require('./sheets/Turistes');
const Ocupacio = require('./sheets/Ocupacio');

const excelToJson = (inputFile) => {
    const excel = XLSX.readFile(inputFile);
    var sheetNames = excel.SheetNames;
    const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']
    sheetNames.forEach (sheet => {
        switch (sheet) {
            case sections[0]:
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
                console.log(sections[1])
                var datos = XLSX.utils.sheet_to_json(excel.Sheets[sheet]);
                Ocupacio.ocupacioPerPlacesObertes(datos);
                Ocupacio.ocupacioPerPlacesObertesAcc(datos);
                break;
            case sections[2]:
                console.log(sections[2])
                break;
            case sections[3]:
                console.log(sections[3])
                break;
            case sections[4]:
                console.log(sections[4])
                break;
            case sections[5]:
                console.log(sections[5])
                break;
            default:
                console.log("Incorrect sheet");

      }
      
  })
}

module.exports = { excelToJson };
