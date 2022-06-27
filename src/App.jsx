import { useState } from 'react'
import QuoteBox from './componentes/QuoteBox'

import './App.css'
import Icon from './componentes/Icon'
const colors= ["#A54657", "#582630", "#52796F", "#F1A66A", "#F26157" ,"#A5243D", "#84A98C"]

function App() {
  
  
  const random = Math.floor(Math.random()*colors.length);
  const IndexColorRandom = Math.floor(Math.random()*colors.length);
 
  let [color, setColor] = useState(random);
  color = colors[IndexColorRandom];

 
  const changeColor = () => {
  const random = Math.floor(Math.random()*colors.length);
    setColor(random);
}

  
  return (
    <div className="App">
      <Icon  color={color} changeColor={changeColor} />
      <QuoteBox color={color} changeColor={changeColor}    />
    </div>
  )
}

export default App
