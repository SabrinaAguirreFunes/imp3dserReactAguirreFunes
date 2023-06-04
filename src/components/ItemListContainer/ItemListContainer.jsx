import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({greeting}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>
          Pieza impresa en 3d y pintada a mano
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer