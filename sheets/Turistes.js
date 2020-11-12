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
  
const arribadaDeTuristes = (data) => {
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
  
const arribadaDeTuristesAcc = (data) => {
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

const despesaDelsTuristes = (data) => {
    var title = Object.values(data[31])[0];
    var columns = [];
    Object.values(data[32]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 33; i <= 43; i++) {
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

const despesaDelsTuristesAcc = (data) => {
    var title = Object.values(data[45])[0];
    var columns = [];
    Object.values(data[46]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 47; i <= 57; i++) {
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

const despesaDelsTuristesTotal = (data) => {
    var title = Object.values(data[61])[0] + ' TOTAL';
    var columns = [];
    Object.values(data[62]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 63; i <= 67; i++) {
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

const despesaDelsTuristesTotalAcc = (data) => {
    var title = Object.values(data[69])[0] + ' TOTAL';
    var columns = [];
    Object.values(data[70]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 71; i <= 75; i++) {
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

const pernoctacions = (data) => {
    var title = Object.values(data[77])[0];
    var columns = [];
    Object.values(data[78]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 79; i <= 84; i++) {
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

const pernoctacionsAcc = (data) => {
    var title = Object.values(data[85])[0];
    var columns = [];
    Object.values(data[86]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 87; i <= 92; i++) {
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

const pernoctacionsPerIlla = (data) => {
    var title = Object.values(data[93])[0] + ' PER ILLA';
    var columns = [];
    Object.values(data[94]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 95; i <= 98; i++) {
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
const pernoctacionsPerIllaAcc = (data) => {
    var title = Object.values(data[99])[0] + ' PER ILLA';
    var columns = [];
    Object.values(data[100]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    for (let i = 101; i <= 104; i++) {
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
module.exports = { 
    arribadaDeTuristes, arribadaDeTuristesAcc, despesaDelsTuristes, despesaDelsTuristesAcc, 
    despesaDelsTuristesTotal, despesaDelsTuristesTotalAcc,
    pernoctacions, pernoctacionsPerIlla, pernoctacionsAcc, pernoctacionsPerIllaAcc};
