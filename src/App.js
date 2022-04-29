import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import Header from './components/navbar';
import Routez from './routes';
import {BrowserRouter, Route} from 'react-router-dom';
import{ Routes} from 'react-router-dom';

import Home from './components/home';
import Shop from './components/shop';

import { perfumes, accesories, skincare } from './products';
import Checkout from './components/checkout';
const event = new Event('props-ready');
const ProductContext=React.createContext({src:"", name:"", price:""});
 const App=()=>{
  const [src, setSrc]=useState("");
  const [name, setName]=useState("");
  const [price, setPrice]=useState("");
  const [quantity, setQuantity]= useState(0);
   
  const  onClick=(src, name, price, quantity)=>{
     setSrc(src);
     setName(name);
     setPrice(price);
     setQuantity(quantity);

    
     document.dispatchEvent(event);
   
   }
  
    return (
      
      <div className="App">
        <ProductContext.Provider value={{
          src:src,
          name:name,
          price:price
        }}>
           <Header name="Shoppy" source={src} itemName={name} price={price} quantity={quantity}/>
        </ProductContext.Provider>
        
        <BrowserRouter className='site' >
               <Routes>
                    <Route  extact path="*" element={<Home/>}/>
                    <Route path="perfumes/*" element={<Shop sendDataToParent={onClick} items={perfumes} title="Perfumes"/>}/>
                    <Route path="skincare/*" element={<Shop sendDataToParent={onClick} items={skincare} title="Skincare"/>}/>
                    <Route path="accesories/*" element={<Shop sendDataToParent={onClick} items={accesories} title="Accesories"/>}/>
                    <Route path="checkout/*" element={<Checkout items={JSON.parse(localStorage.getItem("items"))}/>}/>

                    
                 
                
                 
               </Routes>
           </BrowserRouter>
      </div>
    );
  }



export default App;
export {ProductContext, event };
