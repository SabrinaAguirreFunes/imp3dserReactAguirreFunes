import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  let { idCategory } = useParams();
  console.log(idCategory);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const getProduct = async () => {
      const docs = [];

      if (idCategory === "hotTrending") {
        const q = query(
          collection(db, "products"),
          where("hotTrending", "==", true)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
      } else if (idCategory) {
        const q = query(
          collection(db, "products"),
          where("category", "==", idCategory)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
      } else {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
      }

      console.log(docs);

      setProducts(docs);
    };
    getProduct();
  }, [idCategory]);

  return (
    <div className="itemsList">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ItemCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
