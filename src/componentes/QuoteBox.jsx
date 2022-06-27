import { useState } from "react";
import quotes from "./quotes.json"


const QuoteBox = ({color, changeColor}) => {

    const random = Math.floor(Math.random()*quotes.length)
    const [index, setIndex] = useState(random);

    const changeQuote = () => {
    const random = Math.floor(Math.random()*quotes.length)
        setIndex(random);
    changeColor( );
    }
   
    return (
        <div style={{background:color}} className='App'>
            <div style={{color:color}} className='card' >
                <p style={{color:color}} className="text">{quotes[index].quote}
                 </p>
                <p style={{color:color}} className="author">{quotes[index].author}</p>
                <button  onClick={changeQuote} >
                    <i style={{color:color}} className ="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;