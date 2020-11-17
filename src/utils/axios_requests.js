const axios = require("axios");

const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjA1NTI2MTEzfQ.B__pcBd3XUQPpJfRkObGAGlFzYSfTaLwZ7KnfFhQHJs";

const makePost = (baseUrl, dataObj) => { 
  const headers = {
    "Content-Type": "application/json",
  };
  axios({
    method: 'post',
    baseURL: baseUrl,
    url: '/data-grids',
    data: dataObj,
    headers: { authorization: `Bearer ${API_TOKEN}` }
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

const makePostWithUser = (baseUrl, dataObj) => { 
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
