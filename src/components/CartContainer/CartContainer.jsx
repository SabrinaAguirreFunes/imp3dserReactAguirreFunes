import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useCartContext } from "../../context/CartContext";

import pricePerml from "../PricePerml/PricePerml";
import "../ItemListContainer/ItemListContainer.css";

export const CartContainer = () => {
  const { cartList, totalPrice, deleteProduct, clearCart } = useCartContext();

  console.log(cartList);

  if (cartList[0] === undefined) {
    return (
      <div>
        <h2>Tu carrito se encuentra vacio</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Tu carrito:</h2>
        <div className="itemsList">
          {cartList.map((newProduct) => (
            <div key={newProduct.id}>
              <div style={{ margin: 7 }}>
                <Card style={{ width: "15rem", padding: 0 }}>
                  <Card.Img variant="top" src={newProduct.img} />
                  <Card.Body>
                    <Card.Title>{newProduct.name}</Card.Title>
                    <Card.Text>Cantidad: {newProduct.quantity}</Card.Text>
                    <Card.Text>
                      Precio: $
                      {newProduct.quantity * newProduct.cost * pricePerml}
                    </Card.Text>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteProduct(newProduct.id)}
                    >
                      Eliminar del carrito
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: 7 }}>
          <h3>
            {totalPrice() !== 0 && `El precio total es de: $ ${totalPrice()}`}
          </h3>
          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </div>
      </div>
    );
  }
};
