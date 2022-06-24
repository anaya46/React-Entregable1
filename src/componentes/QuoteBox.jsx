import { useState } from "react";
import quotes from "./quotes.json"

const colors= ["#A54657", "#582630", "#52796F", "#F1A66A", "#F26157" ,"#A5243D", "#84A98C"]

const QuoteBox = () => {

    const random = Math.floor(Math.random()*quotes.length)
    const [index, setIndex] = useState(random);

    const changeQuote = () => {
    const random = Math.floor(Math.random()*quotes.length)
        setIndex(random);
    }
    
    const IndexColorRandom = Math.floor(Math.random()*colors.length)
    const color = colors[IndexColorRandom]
    document.body.style = `background: ${color}`

    return (
        <div className='App'>
            <div className='card' style={{color:color}}>
                 <i className="fa-solid fa-quote-left quote-icon"></i>
                <p className="text">{quotes[index].quote}
                     
                </p>
                <p className="author">{quotes[index].author}</p>
                <button onClick={changeQuote} style={{color:color}}>
                    <i className ="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;