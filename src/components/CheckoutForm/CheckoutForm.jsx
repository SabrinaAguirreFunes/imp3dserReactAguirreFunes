import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

import { db } from "../../firebase/firebaseConfig";

import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import OrderSuccessMessage from "../OrderSuccessMessage/OrderSuccessMessage";

const CheckoutForm = () => {
  const { cartList, clearCart, totalPrice } = useCartContext();
  const { Formik } = formik;

  const yupSchema = yup.object().shape({
    firstName: yup.string().min(2).max(30).required(),
    lastName: yup.string().min(2).max(30).required(),
    phone: yup.number().min(8).required(),
    email: yup.string().email().required(),
    repeatEmail: yup.string().email().required(),
  });

  const [purchaseId, setPurchaseId] = useState(null);

  const submitHandler = async (values, resetForm) => {
    const order = {};

    const date = new Date();

    order.buyer = values;
    order.date = date.toDateString();
    order.items = cartList.map(({ id, name, quantity, cost }) => ({
      id,
      name,
      quantity,
      cost,
    }));
    order.total = totalPrice();

    const docRef = await addDoc(collection(db, "orders"), order);

    setPurchaseId(docRef.id);
    resetForm();
    clearCart();
  };

  const cleanOrder = () => {
    setPurchaseId(null);
  };

  return (
    <div style={{ margin: 7 }}>
      <h2>Tus datos:</h2>
      <div>
        <Formik
          validationSchema={yupSchema}
          onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            repeatEmail: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Nombre"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormik03">
                  <Form.Control
                    type="number"
                    placeholder="Teléfono"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormik03">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormik04">
                  <Form.Control
                    type="email"
                    placeholder="Repetir email"
                    name="repeatEmail"
                    value={values.repeatEmail}
                    onChange={handleChange}
                    isValid={
                      touched.repeatEmail &&
                      !errors.repeatEmail &&
                      values.email === values.repeatEmail
                    }
                    isInvalid={
                      !!errors.repeatEmail ||
                      values.email !== values.repeatEmail
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    repeatEmail must match with email field,{" "}
                    {errors.repeatEmail}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Comprar</Button>
            </Form>
          )}
        </Formik>
      </div>

      {purchaseId ? (
        <OrderSuccessMessage purchaseId={purchaseId} cleanOrder={cleanOrder} />
      ) : null}
    </div>
  );
};

export default CheckoutForm;
