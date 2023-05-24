import { useState, useSyncExternalStore } from 'react';
import './App.css'
import dbQuotes from "./db/quote.json";
import { getRandon } from './utils/random';
import QuoteBox from './assets/components/QuoteBox';

const bgImages = ["bg1","bg2","bg3","bg4"];

function App() {
 const [quote, setQuote]= useState(getRandon(dbQuotes))
 const [bgImage, setBgImage] = useState(getRandon(bgImages))



 const handleChangueQuote =()=>{
  setQuote(getRandon(dbQuotes))
  setBgImage(getRandon(bgImages))
 }

 
  return (
    <main className={`app ${bgImage}`}>
     <section className='app__container'>
      <h1>Space</h1>
      <QuoteBox handleChangueQuote={handleChangueQuote} phrase={quote.phrase}/>
      <footer>
      <h3>Fuente:{quote.author}</h3>
      </footer>
      </section> 
    </main>
  )
}

export default App
