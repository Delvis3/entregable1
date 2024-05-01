import "./styles/quoteBox.css"

const QuoteBox = ({phrase, handleChangueQuote}) => {
 return(
    <>
    <button  onClick={handleChangueQuote}><i class="fa-solid fa-reply"></i></button>
    <section className="quoteBox">
       <article className="quoteBox__phrase">
           <p>
           {phrase}
          </p>
      </article>
      </section>
      
      <section>
  </section>
  </>
 )

}
export default QuoteBox