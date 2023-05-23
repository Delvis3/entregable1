import "./styles/quoteBox.css"

const QuoteBox = ({phrase, handleChangueQuote}) => {
 return(
    <>
    <section className="quoteBox">

       <article className="quoteBox__phrase">
           <p>
           {phrase}
          </p>
      </article>
      </section>
      
      <section>
      <button className="quoteBox__btn" onClick={handleChangueQuote}>Explore</button>
  </section>
  </>
 )

}
export default QuoteBox