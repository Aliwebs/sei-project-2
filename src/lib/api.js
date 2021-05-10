import axios from 'axios'

const baseUrl = 'https://goquotes-api.herokuapp.com/api/v1'


function getHeaders() {
  return {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Access-Control-Allow-Origin': '*',
  }
}

export function getQuotes() {
  return axios.get(`${baseUrl}/all/quotes`)
}

export function getAllTags() {
  return axios.get(`${baseUrl}/all/tags`)
}
