import { useEffect, useState } from 'react'

import QuoteCard from "./QuoteCard"
import { getAllTags } from '../../lib/api'

function AllQuotes() {
  const [originalQuotes] = useState(JSON.parse(localStorage.getItem('quotes')))
  const [quotesArray, setQuotesArray] = useState(JSON.parse(localStorage.getItem('quotes')))

  const [allTags, setAllTags] = useState(null)
  const [selectedTag, setSelectedTag] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTags()
      setAllTags(res.data.tags)
    }
    getData()
  }, [])

  const handleChange = ({ target: { value } }) => {
    setSelectedTag(value)
    const filteredTag = originalQuotes.filter(quote => quote.tag === value || value === 'All')
    const filteredAuthor = filteredTag.filter(quote => quote.author.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '')
    setQuotesArray(filteredAuthor)
  }

  const handleInput = ({ target: { value } }) => {
    setSearchTerm(value)
    const filteredTag = originalQuotes.filter(quote => quote.tag === selectedTag || selectedTag === 'All')
    const filteredAuthor = filteredTag.filter(quote => quote.author.toLowerCase().includes(value.toLowerCase()) || value === '')
    setQuotesArray(filteredAuthor)
  }


  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third box" id="filters">
            <h2 className="title">Filter</h2>
            <div className="field">
              <label className="label has-text-centered">Filter By Tag</label>
              <div className="select is-link">
                <select value={selectedTag} onChange={handleChange}>
                  <option value="All">All</option>
                  {allTags && allTags.map(tag => (
                    <option key={tag.name} value={tag.name} >{tag.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="label has-text-centered">Search By Author</label>
                <div className="control">
                  <input className="input" value={searchTerm} onChange={handleInput} />
                </div>
              </div>
            </div>
          </div>
          <div className="column" id="AllQuotes">
            {quotesArray ? (
              quotesArray.map(quote => (
                <div key={quote.id}>
                  <QuoteCard  {...quote} />
                </div>
              ))
            )
              :
              (<p>...loading</p>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllQuotes