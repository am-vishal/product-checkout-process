import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Checkout from "./components/Checkout";
import ProductListing from "./components/ProductListing";
import ReviewOrder from "./components/ReviewOrder";

function App() {
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch products data from an API when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
    // Clean up function to be executed when the component is unmounted
    return () => {
      setProducts([]);
    };
  }, []);

  const [cart, setCart] = useState([]);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeclassname="active">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout" activeclassname="active">
                Checkout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review-order" activeclassname="active">
                Review & Place Order
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<ProductListing products={products} cart={cart} addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/review-order" element={<ReviewOrder cart={cart} userInfo={userInfo} />} />
      </Routes>
    </>
  );
}

export default App;
