import axios from 'axios'
const baseUrl = 'https://goquotes-api.herokuapp.com/api/v1'
export function getQuotes() {
  return axios.get(`${baseUrl}/all/quotes`)
}
export function getAllTags() {
  return axios.get(`${baseUrl}/all/tags`)
}

//getting and storing all the data

export async function getApiData() {
  try {
    const getQuotesRes = await getQuotes()
    const getTagsRes = await getAllTags()
    let quoteId = 0
    const quotes = getQuotesRes.data.quotes
    const tags = getTagsRes.data.tags
    const newQuotes = quotes.map(quote => {
      quoteId++
      return { ...quote, id: quoteId }
    })
    localStorage.setItem('quotes', JSON.stringify(newQuotes))
    localStorage.setItem('tags', JSON.stringify(tags))
    return false
  } catch (err) {
    return true
  }
}