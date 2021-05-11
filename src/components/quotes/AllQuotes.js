
import React from 'react'
import QuoteCard from './QuoteCard'
import { useFilter } from '../../hooks/useFilter'
import { useState } from 'react'
import Error from '../common/Error'


function AllQuotes({ error }) {
  const dislike = JSON.parse(localStorage.getItem('dislike'))
  const quotes = JSON.parse(localStorage.getItem('quotes')).filter(quote => !dislike.includes(String(quote.id)))
  const tags = JSON.parse(localStorage.getItem('tags'))
  const loadingHeight = 10
  const [currentLoad, setCurrentLoad] = React.useState(loadingHeight)
  const [loadingArray, setLoadingArray] = React.useState(quotes.slice(0, currentLoad))

  const { searchForm, handleChange, filterQuotes, filteredQuotes } = useFilter({
    tag: 'All',
    searchField: '',
  })
  React.useEffect(() => {
    if (quotes) {
      filterQuotes(quotes)
      if (filteredQuotes) {
        setLoadingArray(filterQuotes(quotes).slice(0, loadingHeight))
        setCurrentLoad(loadingHeight)
        const target = document.getElementById('AllQuotes')
        target.scrollTop = 0
      }
    }
  }, [searchForm])

  const handleScroll = ({ target }) => {
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setLoadingArray(filteredQuotes.slice(0, currentLoad + loadingHeight))
      setCurrentLoad(currentLoad + loadingHeight)
    }
  }
  return (
    <>
      { error && !quotes && !tags ?
        <Error />
        :
        (<section className="section">
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
                        <option key={tag.name} value={tag.name} >{tag.name}</option>
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
              <div className="column" id="AllQuotes" onScroll={handleScroll}>
                {loadingArray ? (
                  loadingArray.map(quote => (
                    <div key={quote.id}>
                      <QuoteCard  {...quote} />
                    </div>
                  ))
                )
                  :
                  (!error && <p>...loading</p>)
                }
              </div>
            </div>
          </div>
        </section>)
      }
    </>
  )
}
export default AllQuotes