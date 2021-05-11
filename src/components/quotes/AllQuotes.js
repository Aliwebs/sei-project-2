import React from 'react'
import QuoteCard from './QuoteCard'
import { useFilter } from '../../hooks/useFilter'
function AllQuotes() {
  const quotes = JSON.parse(localStorage.getItem('quotes'))
  const tags = JSON.parse(localStorage.getItem('tags'))

  const { searchForm, handleChange, filterQuotes, filteredQuotes } = useFilter({
    tag: 'All',
    searchField: '',
  })
  React.useEffect(() => {
    filterQuotes(quotes)
  }, [searchForm])
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third box" id="filters">
            <h2 className="title">Filter</h2>
            <div className="field">
              <label className="label has-text-centered">Filter By Tag</label>
              <div className="select is-link">
                <select name="tag" onChange={handleChange}>
                  <option value="All">All</option>
                  {tags && tags.map(tag => (
                    <option key={tag.id} value={tag.name} >{tag.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="label has-text-centered">Search By Author</label>
                <div className="control">
                  <input className="input" name="searchField" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="column" id="AllQuotes">
            {filteredQuotes ? (
              filteredQuotes.map(quote => (
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