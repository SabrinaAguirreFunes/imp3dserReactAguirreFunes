import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import pricePerml from "../PricePerml/PricePerml";

const ItemDetail = ({ product }) => {
  const { addCart } = useCartContext();

  const onAdd = (cant) => {
    addCart({ ...product, quantity: cant });
  };

  return (
    <div style={{ margin: 7 }}>
      <Card style={{ width: "25rem", padding: 0 }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Altura: {product.height}cm (aprox.)</Card.Text>
          <Card.Text>{product.detail}</Card.Text>
          <Card.Text>Precio: ${product.cost * pricePerml}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem", padding: 0 }}>
        <ItemCount stock={product.stock} onAdd={onAdd} />
      </Card>
    </div>
  );
};

export default ItemDetail;
