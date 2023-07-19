import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const counterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(counter);
  };

  return (
    <div>
      <p>
        <button onClick={counterDown}>-</button>
        {counter}
        <button onClick={counterUp}>+</button>
        <Button variant="outline-primary" onClick={handleOnAdd}>
          Agregar al carrito
        </Button>
      </p>
    </div>
  );
};

export default ItemCount;
