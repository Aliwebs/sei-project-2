import React from 'react'
export function useFilter(searchData) {
  const [searchForm, setSearchForm] = React.useState(searchData)
  const [filteredQuotes, setFilteredQuotes] = React.useState()
  const handleChange = e => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value })
  }
  function filterQuotes(originalQuotes) {
    const filteredTag = originalQuotes.filter(quote => quote.tag === searchForm.tag || searchForm.tag === 'All')
    const filteredAuthor = filteredTag.filter(quote => quote.author.toLowerCase().includes(searchForm.searchField.toLowerCase()) || searchForm.searchField === '')
    setFilteredQuotes(filteredAuthor)
    return filteredAuthor
  }
  return {
    searchForm,
    handleChange,
    filterQuotes,
    filteredQuotes,
  }
}