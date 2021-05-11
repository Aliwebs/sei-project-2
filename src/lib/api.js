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
    const getQuotes = await getQuotes()
    const getTags = await getAllTags()
    let quoteId = 0
    let tagId = 0
    const quotes = getQuotes.data.quotes
    const tags = getTags.data.tags
    const newQuotes = quotes.map(quote => {
      quoteId++
      return { ...quote, id: quoteId }
    })
    const newTags = tags.map(tag => {
      tagId++
      return { ...tag, id: tagId }
    })
    localStorage.setItem('quotes', JSON.stringify(newQuotes))
    localStorage.setItem('tags', JSON.stringify(newTags))
  } catch (err) {
    console.log(err)
  }
}