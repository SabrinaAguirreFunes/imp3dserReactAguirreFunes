import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemCard = ({product}) => {
    
  const pricePerml = 50;

  return (
    <Card style={{ width: '18rem', margin: 5}}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Figura de {product.name} impresa en 3d y pintada a mano
        </Card.Text>
        <Card.Text>
          Altura: {product.height}cm (aprox.)
        </Card.Text>
        <Card.Text>
          Precio: ${product.cost*pricePerml}
        </Card.Text>
        <ItemCount/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard