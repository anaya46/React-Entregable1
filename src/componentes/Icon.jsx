import { useState } from "react";




const Icon = ({color, changeColor}) => {

    
    return (
        <div >
            <i style={{color:color, changeColor:color}} className="fa-solid fa-quote-left quote-icon" ></i>
            
        </div>
    );
};

export default Icon;