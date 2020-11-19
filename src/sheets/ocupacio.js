const generate_json = require('../utils/generate_json');
const table = require('../json/sheets_json');
const request = require('../utils/axios_requests')

const ocupacioPerPlacesObertes = (data) => {
  const { init_row, num_rows} = table.rows['ocupacio']
  var dataObj = generate_json.getDataOcupacio(data, init_row, num_rows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}
  
const ocupacioPerPlacesObertesAcc = (data) => {
  const { init_row, num_rows} = table.rows['ocupacio']
  var dataObj = generate_json.getDataOcupacioAcc(data, init_row, num_rows);
  request.makePost('http://54.77.111.120:5300', dataObj); 
}


module.exports = { ocupacioPerPlacesObertes, ocupacioPerPlacesObertesAcc };