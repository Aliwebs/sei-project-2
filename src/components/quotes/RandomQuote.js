import React from 'react'

import QuoteCard from './QuoteCard'
import Error from '../common/Error'

function RandomQuote({ error }) {
  const dislike = JSON.parse(localStorage.getItem('dislike'))
  const quotesArray = JSON.parse(localStorage.getItem('quotes')).filter(quote => !dislike.includes(String(quote.id)))

  const [randomQuote, setRandomQuote] = React.useState(
    !!quotesArray &&
    quotesArray[Math.floor(Math.random() * quotesArray.length)])

  const handleClick = () => {
    setRandomQuote(quotesArray[Math.floor(Math.random() * quotesArray.length)])
  }

  return (
    <section className="section">
      <div className="container has-text-centered">
        {error && !quotesArray && <Error />}
        {randomQuote ?
          (
            <>
              <QuoteCard {...randomQuote} random={true} />
              <button className="button is-warning" onClick={handleClick}>Get Random</button>
            </>
          )
          :
          (!error && <p>...loading</p>)
        }

      </div>
    </section>
  )
}

export default RandomQuote