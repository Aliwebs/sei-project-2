import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import AllQuotes from './components/quotes/AllQuotes'
import RandomQuote from './components/quotes/RandomQuote'
import { getApiData } from './lib/api'
function App() {

  const [isError, setIsError] = React.useState(false)
  getApiData().then(data => {
    setIsError(data)
  })
  if (localStorage.getItem('dislike') === null) {
    localStorage.setItem('dislike', JSON.stringify([]))
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/random">
          <RandomQuote error={isError} />
        </Route>
        <Route path="/all">
          <AllQuotes error={isError} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}
export default App