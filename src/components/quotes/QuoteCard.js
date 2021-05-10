function QuoteCard({ text, author, tag }) {
  return (
    <section className="quotesCardContainer">
      <div className="container">
        <div className="box">
          <h2 className="subtitle">{text}</h2>
          <div className="columns">
            <div className="column">
              <p>Author: <span className="bold">{author}</span> | Tag: <span className="italic">{tag}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteCard