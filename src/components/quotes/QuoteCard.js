import { useState } from 'react'
function QuoteCard({ text, author, tag, id, random }) {
  if (localStorage.getItem('dislike') === null) {
    localStorage.setItem('dislike', JSON.stringify([]))
  }

  const [liked, setLiked] = useState(false)

  const handleClick = ({ target: { id } }) => {
    const stringId = String(id)
    let array = []
    if (localStorage.getItem('dislike')) {
      array = JSON.parse(localStorage.getItem('dislike'))
    }
    if (array.indexOf(stringId) === -1) {
      setLiked(true)
      array.push(id)
      localStorage.setItem('dislike', JSON.stringify(array))
    } else {
      const index = array.indexOf(stringId)
      setLiked(false)
      array.splice(index, 1)
      localStorage.setItem('dislike', JSON.stringify(array))
    }
  }

  return (
    <section className="quotesCardContainer">
      <div className="container">
        <div className="box">
          <h2 className="subtitle">{text}</h2>
          <div className="columns">
            <div className="column">
              <p>Author: <span className="bold">{author}</span> | Tag: <span className="italic">{tag}</span></p>
            </div>
            <div className="column is-offset-half">
              {!random && <button className={`button ${liked ? 'is-dark' : ''}`} id={id} onClick={handleClick}>Dislike</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteCard