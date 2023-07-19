import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const OrderSuccessMessage = ({ purchaseId, cleanOrder }) => {
  return (
    <Alert variant="success" style={{ margin: 7 }}>
      <Alert.Heading>Pedido exitoso</Alert.Heading>
      <p>Su id de transacción es: {purchaseId}</p>
      <p>Gracias por su compra.</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={cleanOrder} variant="outline-success">
          Cerrar
        </Button>
      </div>
    </Alert>
  );
};

export default OrderSuccessMessage;
