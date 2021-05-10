import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, } from 'react'

import { getQuotes } from './lib/api'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import RandomQuote from './components/quotes/RandomQuote'
import AllQuotes from './components/quotes/AllQuotes'

function App() {
  let number = 1
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getQuotes()
        const resWithId = res.data.quotes.map(quote => {
          number++
          return { ...quote, id: number }
        })
        localStorage.setItem('quotes', JSON.stringify(resWithId))
      } catch (err) {
        console.log(err.response)
      }
    }
    getData()
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/random" component={RandomQuote} />
        <Route path="/all" component={AllQuotes} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
