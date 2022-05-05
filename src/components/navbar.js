import React, { Component } from "react";
import "../styles/header.css";
import Cart from "./cart";
import { Link, Navigate, Router } from "react-router-dom";

const show = false;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      scroll: this.props.scroll,
    };
  }

  Change = (field, value) => {
    this.setState({ [field]: value });
    this.props.onChange(field, value);
  };

  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">{this.props.name}</div>
        <div className="second-half">
          <ul>
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
              source={this.props.source}
              name={this.props.itemName}
              price={this.props.price}
              quantity={this.props.quantity}
            />
          </div>

          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
