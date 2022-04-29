import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import{ Routes} from 'react-router-dom';

import Home from './components/home';
import Shop from './components/shop';
import Header from './components/navbar';
import { perfumes, accesories, skincare } from './products';
import Checkout from './components/checkout';
import { prependOnceListener } from 'process';
const Routez = (props) => {
    // const [src, setSrc]=useState("");
    // const [name, setName]=useState("");
    // const [price, setPrice]=useState("");
  const onClick=(src, name ,price )=>{
      // setSrc(src);
      // setName(name);
      // setPrice(price);
      props.onClick(src, name, price);
  }
    
    return <BrowserRouter className='site' >
               <Routes>
                    <Route  extact path="*" element={<Home/>}/>
                    <Route path="perfumes/*" element={<Shop onClick={onClick.bind(this)} items={perfumes}/>}/>
                    <Route path="skincare/*" element={<Shop onClick={onClick.bind(this)} items={skincare}/>}/>
                    <Route path="accesories/*" element={<Shop onClick={onClick.bind(this)} items={accesories}/>}/>
                    <Route path="checkout/*" element={<Checkout items={JSON.parse(localStorage.getItem("items"))}/>}/>

                    
                 
                
                 
               </Routes>
           </BrowserRouter>
   };
   
   export default Routez;