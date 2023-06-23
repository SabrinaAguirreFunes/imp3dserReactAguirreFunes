import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import "./ItemListContainer.css"

const ItemListContainer = () => {

  let {idCategory} = useParams();

  console.log (idCategory);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
    .then((response) => response.json())
    .then((json) => setProducts(json))
  }, [])

  console.log(products)
  
  let productByCategory = [];

  if (idCategory === "hotTrending"){
    productByCategory = products.filter((product) => product.hotTrending === true);
  } else {
    productByCategory = products.filter((product) => product.category === idCategory);
  }


  console.log(productByCategory)

  return (
    idCategory ? 
    <div className="itemsList" >
    {productByCategory.map((product) => {
      return(
        <div key={product.id}>
          <Link to={`/detail/${product.id}`}>
            <ItemCard product={product}/>
          </Link>
        </div>
      )
    })}
  </div>

    :

    <div className="itemsList" >
      {products.map((product) => {
        return(
          <div key={product.id}>
            <Link to={`detail/${product.id}`}>
              <ItemCard product={product}/>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default ItemListContainer