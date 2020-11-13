const axios = require("axios");

const makePost = (baseUrl, dataObj) => { 
  const headers = {
    "Content-Type": "application/json",
  };
  axios({
    method: 'post',
    baseURL: baseUrl,
    url: '/login',
    data: { username: 'admin', password: 'Admin2020_' },
    headers: headers
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

module.exports = { makePost };
