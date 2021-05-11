import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import AllQuotes from './components/quotes/AllQuotes'
import RandomQuote from './components/quotes/RandomQuote'
import { getApiData } from './lib/api'
function App() {

  getApiData()

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