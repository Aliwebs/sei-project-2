import { useState } from 'react'
import QuoteCard from './QuoteCard'

function RandomQuote() {
  const quotesArray = JSON.parse(localStorage.getItem('quotes'))
  const [randomQuote, setRandomQuote] = useState(quotesArray[Math.floor(Math.random() * quotesArray.length)])

  const handleClick = () => {
    setRandomQuote(quotesArray[Math.floor(Math.random() * quotesArray.length)])
  }

  return (
    <section className="section">
      <div className="container has-text-centered">
        <QuoteCard {...randomQuote} />
        <button className="button is-warning" onClick={handleClick}>Get Random</button>
      </div>
    </section>
  )
}

export default RandomQuote