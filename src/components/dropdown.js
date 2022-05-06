import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFrownOpen,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/dropdown.css";
import uniqid from "uniqid";
const styles = {
  img: {
    width: 50,
    height: 65,
  },

  icon: {
    width: 40,
    height: 40,
  },
  icon2: {
    width: 20,
    height: 20,
    color: "##6b938e",
  },
  icon3: {
    width: 15,
    height: 15,
    color: "##6b938e",
  },
};
const Dropdown = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.items);
  }, []);

  const DropdownItem = (props) => {
    const [quantity, setQuantity] = useState(1);
    const Delete = (ev) => {
      if (quantity == 1) {
        let itemz = items;
        let indx = items.findIndex((element) => element.name == ev.target.id);
        itemz.splice(indx, 1);
        setItems(itemz);
        localStorage.setItem("items", JSON.stringify(itemz));
      } else {
        let itemz = items;
        setQuantity((quantity) => quantity - 1);
        let indx = items.findIndex((element) => element.name == ev.target.id);
        let removed = itemz.splice(indx, 1);
        removed[0].quantity -= 1;
        itemz.push(removed[0]);
        setItems(itemz);
        localStorage.setItem("items", JSON.stringify(itemz));
      }
    };

    useEffect(() => {
      setQuantity(props.quantity);
    }, []);
    const Add = (ev) => {
      setQuantity((quantity) => quantity + 1);
      let itemz = items;
      let indx = items.findIndex((element) => element.name == ev.target.id);
      let removed = itemz.splice(indx, 1);
      removed[0].quantity += 1;
      itemz.push(removed[0]);
      setItems(itemz);
      localStorage.setItem("items", JSON.stringify(itemz));
    };

    return (
      <div className="drop-item">
        <img src={props.src} style={styles.img} />
        <p>{props.name}</p>
        <p>{props.price}</p>
        <div className="quantity">
          <button className="dropdown-btn" id={props.name} onClick={Delete}>
            {" "}
            <FontAwesomeIcon icon={faMinus} style={styles.icon3} />
          </button>
          <p className="number">{quantity}</p>
          <button
            className="dropdown-btn"
            name={props.name}
            id={props.src}
            title={props.price}
            onClick={Add}
          >
            {" "}
            <FontAwesomeIcon icon={faPlus} style={styles.icon3} />
          </button>
        </div>
      </div>
    );
  };
  if (items.length == 0) {
    return (
      <div className="dropdown">
        <div className="message">
          <p> Your cart is empty. </p>
          <FontAwesomeIcon icon={faFaceFrownOpen} style={styles.icon} />
        </div>
      </div>
    );
  }
  return (
    <div className="dropdown">
      {items.map((obj) => {
        return (
          <div>
            <DropdownItem
              src={obj.src}
              name={obj.name}
              price={obj.price}
              key={obj.name}
              quantity={obj.quantity}
            />
          </div>
        );
      })}
      <div className="checkout-btn">
        <FontAwesomeIcon icon={faCartShopping} style={styles.icon2} />
        <a className="check-btn" href="/shop-front/#/checkout">
          Go to chcekout
        </a>
      </div>
    </div>
  );
};
export default Dropdown;
