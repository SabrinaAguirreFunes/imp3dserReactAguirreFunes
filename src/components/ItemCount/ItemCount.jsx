import { useState } from "react";

const ItemCount = () => {

  const [counter, setCounter] = useState(1);

  const counterUp = () =>{
    setCounter(counter + 1)
  }

  const counterDown = () =>{
    setCounter(counter - 1)
  }

  return (
    <div>
      <p><button onClick={counterDown}>-</button>{counter}<button onClick={counterUp}>+</button></p>
      
      
    </div>
  )
}

export default ItemCount