import React, { Component, useState } from "react";
import "../styles/header.css";
import Cart from "./cart";
import { Link, Navigate, Router } from "react-router-dom";

const show = false;
const Header = (props) => {
  const [clicked, setClicked] = useState(false);

  const Clicked = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">{props.name}</div>
      <div className="second-half">
        <ul className={clicked ? "nav-active" : "nav-links"}>
          <li>
            <a className="link" href="/shop-front/#/">
              {" "}
              Home
            </a>
          </li>

          <li>
            <a className="link" href="/shop-front/#/perfumes">
              {" "}
              Perfumes{" "}
            </a>
          </li>
          <li>
            <a className="link" href="/shop-front/#/skincare">
              {" "}
              Skincare{" "}
            </a>
          </li>
          <li>
            <a className="link" href="/shop-front/#/accesories">
              {" "}
              Accesories{" "}
            </a>
          </li>
        </ul>
        <div className="cart-div">
          <Cart
            source={props.source}
            name={props.itemName}
            price={props.price}
            quantity={props.quantity}
          />
        </div>

        <div className="burger" onClick={Clicked}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
