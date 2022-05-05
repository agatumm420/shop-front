import "./App.css";
import React, { useState } from "react";
import Header from "./components/navbar";
import { HashRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./components/home";
import Shop from "./components/shop";

import { perfumes, accesories, skincare } from "./products";
import Checkout from "./components/checkout";
const event = new Event("props-ready");
const ProductContext = React.createContext({ src: "", name: "", price: "" });
const App = () => {
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  const onClick = (src, name, price, quantity) => {
    setSrc(src);
    setName(name);
    setPrice(price);
    setQuantity(quantity);

    document.dispatchEvent(event);
  };

  return (
    <div className="App">
      <ProductContext.Provider
        value={{
          src: src,
          name: name,
          price: price,
        }}
      >
        <Header
          name="Shopp"
          source={src}
          itemName={name}
          price={price}
          quantity={quantity}
        />
      </ProductContext.Provider>

      <Router basename="/" className="site">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/perfumes"
            element={
              <Shop
                sendDataToParent={onClick}
                items={perfumes}
                title="Perfumes"
              />
            }
          />
          <Route
            exact
            path="/skincare"
            element={
              <Shop
                sendDataToParent={onClick}
                items={skincare}
                title="Skincare"
              />
            }
          />
          <Route
            exact
            path="/accesories"
            element={
              <Shop
                sendDataToParent={onClick}
                items={accesories}
                title="Accesories"
              />
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <Checkout items={JSON.parse(localStorage.getItem("items"))} />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
export { ProductContext, event };
