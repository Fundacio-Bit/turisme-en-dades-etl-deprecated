const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const ocupacioPerPlacesObertes = (data, month) => {
  const { section, initRow, numRows} = table.rows['ocupacio']
  var dataObj = generate_json.getDataOcupacio(data, month, section, initRow, numRows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const ocupacioPerPlacesObertesAcc = (data, month) => {
  const { section, initRow, numRows} = table.rows['ocupacio']
  var dataObj = generate_json.getDataOcupacioAcc(data, month, section, initRow, numRows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}


module.exports = { ocupacioPerPlacesObertes, ocupacioPerPlacesObertesAcc };