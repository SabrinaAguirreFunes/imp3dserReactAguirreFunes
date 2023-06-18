import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";

const ItemDetailContainer = ({}) => {

  let {id} = useParams();

  console.log(id)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
    .then((response) => response.json())
    .then((json) => setProducts(json))
  }, [])

  console.log(products)

  let productById = products.filter((product) => product.id === parseInt(id,10));

  console.log(productById)

  return (
    <div>
      {productById.map((product) => {
        return(
          <div key={product.id}>
            <ItemCard product={product}/>
          </div>
        )
      })}
    </div>
  );
}

export default ItemDetailContainer