import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const CategoryPage = () => {
  let { idCategory } = useParams();
  console.log(idCategory);

  if (idCategory === "hotTrending") {
    return (
      <div>
        <h1>Hot Trending</h1>
        <ItemListContainer />
      </div>
    );
  } else if (idCategory === "customized") {
    return (
      <div>
        <h1>Línea Personalizada</h1>
        <ItemListContainer />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Línea Tradicional</h1>
        <ItemListContainer />
      </div>
    );
  }
};

export default CategoryPage;
