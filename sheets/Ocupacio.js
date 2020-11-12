const axios = require("axios");

const makePostRequest = (baseUrl, dataObj) => { 

    axios({
      method: 'post',
      baseURL: baseUrl,
      url: '/login',
      data: { username: 'eaguado', password: 'miclave' },
    })
    .then(response => {
      console.log('token:', response.data.token)
      return axios({
        method: 'post',
        baseURL: baseUrl,
        url: '/data-grids',
        data: dataObj,
        headers: { authorization: `Bearer ${response.data.token}` }
      })
    })
    .then(response => {
      console.log(response.data)
      process.exit(0)
    })
    .catch(err => {
      console.log(err.toString())
      process.exit(1)
    })
  } 
  
const ocupacioPerPlacesObertes = (data) => {
    var title = Object.values(data[0])[0];
    var columns = [];
    Object.values(data[1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 2; i <= 12; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => all_values.push(item.toString()))
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values})
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
        "columns": columns,
        "rows": rows
    }
    console.log(JSON.stringify(dataObj));
    makePostRequest('http://127.0.0.1:3000/data-grids', dataObj); 
}
  
const ocupacioPerPlacesObertesAcc = (data) => {
    var title = Object.values(data[15])[0];
    var columns = [];
    Object.values(data[16]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 17; i <= 27; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => all_values.push(item.toString()))
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values})
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
        "columns": columns,
        "rows": rows
    }
    console.log(JSON.stringify(dataObj));
    makePostRequest('http://127.0.0.1:3000/data-grids', dataObj); 
}


module.exports = { ocupacioPerPlacesObertes, ocupacioPerPlacesObertesAcc };