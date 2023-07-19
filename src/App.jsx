import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Context
import { CartProvider } from "./context/CartContext";

//Components
import NavBar from "./components/NavBar/NavBar";

//Pages
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ProcessPage from "./pages/ProcessPage/ProcessPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import DetailPage from "./pages/DetailPage/DetailPage";

// Style
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/category/:idCategory" element={<CategoryPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
