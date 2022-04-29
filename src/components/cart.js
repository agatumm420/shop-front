import React ,{useEffect, useState, useContext}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Dropdown from "./dropdown";
import { ProductContext, event } from "../App";
const styles={
    icon:{
        width:40,
        height:40,
        color:"#fff",
    }
}
const itemz=[
     {
        src:"https://img.freepik.com/free-photo/high-angle-empty-perfume-bottle_23-2149234339.jpg?t=st=1650114600~exp=1650115200~hmac=e8121582de42da0910ecff53623d191f0dda18c277533746ae92caea8d2ace5b&w=360",
        name:"Product 1",
        price:"99.99$"

    },
    {
        src:"https://img.freepik.com/free-photo/high-angle-red-lipstick-still-life_23-2149234349.jpg?t=st=1650114682~exp=1650115282~hmac=d56fdad2a6dd0bdb50bac555876acee26d99f4c2721f43fdfd2872e2a2f3473e&w=360",
        name:"Product 2",
        price:"59.99$"

    },
    {
        src:"https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163138.jpg?t=st=1650114682~exp=1650115282~hmac=4c4670ed0dc119c225a60730843e9a20edf99e225599a3ff7809978330c341a8&w=360",
        name:"Product 3",
        price:"89.99$"
    }
]
const ItemFactory=(src,name, price, quantity)=>{
    return {
        src:src,
        name:name,
        price:price,
        quantity:quantity,
    }
}
const Cart=(props)=>{
    
    const [count, setCount]=useState(0);
    const [clicked, setClicked]=useState(false);
    const [items, setItems]=useState([]);
   // const [itemclicked, setItemClicked]=useState(false);
    // useEffect(()=>{
    //     const itemz= JSON.parse(localStorage.getItem("items"));
    //     if(itemz){
    //         itemz.forEach((element )=> {
    //             setCount(count=>count+1);
    //         });
    //         setItems(items=>items.concat(itemz));
    //     }

    // },[])
    // document.addEventListener("props-ready", ()=>{
    //     const item=ItemFactory(props.source,props.name, props.price);
    //     //const item=useContext(ProductContext);
        
    //    // setItems(items=>items.concat(item));
    //    setItemClicked(true);

    // });
    useEffect(()=>{
       
        let itemz= JSON.parse(localStorage.getItem("items"));
        //let counter=Number(JSON.parse(localStorage.getItem("count")));
        

        if(itemz){
            let counter=0
            itemz.forEach((element )=> {
                        counter+=1*element.quantity;
                    });
            setCount(counter);
            setItems(itemz);
        
        }
        else{
            setItems([]);
        }
      
       
    },[])
    useEffect(()=>{
        let itemz= JSON.parse(localStorage.getItem("items"));
        if(itemz){
            let counter=0
            itemz.forEach((element )=> {
                    counter+=1*element.quantity;
                });
            setCount(counter);
            
            setItems(itemz);
        
        }
        else{
            setCount(0);
            setItems([]);
        }
        
        

    },[props.source])
    // useEffect(()=>{
    //     event.stopPropagation();
    // },[itemclicked])
   const onClick=()=>{
       
           setClicked(!clicked);
        
    }
    return  <div className="cart">
                <div className="cart-icon" onClick={onClick}>
                    <FontAwesomeIcon icon={faCartShopping} style={styles.icon}/>
                    <div className="count-circle">
                        <p className="count">{count}</p>
                    </div>

                    </div>
                    
                {clicked==true? <Dropdown items={items}/>: null}
                    
        </div>
                
}
export default Cart;