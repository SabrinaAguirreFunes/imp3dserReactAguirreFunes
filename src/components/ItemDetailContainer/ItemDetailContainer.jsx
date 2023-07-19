import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({}) => {
  let { id } = useParams();

  console.log(id);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProductData(docs);
    };
    getProduct();
  }, [id]);

  console.log(productData);

  return productData.length === 0 ? (
    <div>
      <h1>Producto no encontrado</h1>
      <Link to="/">
        <h2>Volver a Home</h2>
      </Link>
    </div>
  ) : (
    <div className="itemsList">
      {productData.map((product) => {
        return (
          <div key={product.id}>
            <ItemDetail product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
