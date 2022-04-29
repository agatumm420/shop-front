import React, {useState, useEffect}from "react";
import uniqid from 'uniqid';
const styles={
    img:{
        width:150,
        height:230,
    }
}

const Shop=({items,title, sendDataToParent})=>{
    
    const onClick=(ev)=>{
       if(ev.target.name){
            
            let id=uniqid();
            let item={
            src:ev.target.src,
            name:ev.target.name,
            price:ev.target.id,
            
         

        }
        let itemsarr= JSON.parse(localStorage.getItem("items"));
        if(itemsarr){
            let found= itemsarr.find(element=>element.name==ev.target.name);
            if(found==undefined){
                sendDataToParent(ev.target.src, ev.target.name, ev.target.id);
            }
            
                itemsarr.push(item);
                 let preped=JSON.stringify(itemsarr);
                localStorage.setItem("items", preped);
            
            
        }
        else{
            itemsarr=[item];
            let preped=JSON.stringify(itemsarr);
            
            localStorage.setItem("items", preped);
            sendDataToParent(ev.target.src, ev.target.name, ev.target.id);

        }
       }      

      
        
    
         
        

        
    }
    const onClick2=(ev)=>{
        if(ev.target.name){
            let item={
                src:ev.target.src,
                name:ev.target.name,
                price:ev.target.id,                       
                quantity:1
    
            }
            let itemsarr= JSON.parse(localStorage.getItem("items"));
            if(itemsarr){
                let found= itemsarr.find(element=>element.name==ev.target.name);
                if(found==undefined){
                 
                    itemsarr.push(item);
                    let preped=JSON.stringify(itemsarr);
                    localStorage.setItem("items", preped);
                    sendDataToParent(ev.target.src, ev.target.name, ev.target.id, 1 );
                }
                else{
                   let index= itemsarr.findIndex(element=> element.name==ev.target.name);
                   let removed= itemsarr.splice(index,  1);
                   removed[0].quantity+=1;
                   itemsarr.push(removed[0]);
                   localStorage.setItem("items", JSON.stringify(itemsarr));
                   sendDataToParent(removed[0].src, removed[0].name, removed[0].price, removed[0].quantity);

                }
               
            }
            else{
                itemsarr=[item];
                let preped=JSON.stringify(itemsarr);
                
                localStorage.setItem("items", preped);
                sendDataToParent(ev.target.src, ev.target.name, ev.target.id, 1);
            }
        }
    }

    const ShopItem=(props)=>{
        const [hover, setHover]= useState(false);
        const UnHover=()=>{
            setHover(false);
        }
        const Hover=()=>{
           setHover(true);
        }
        return( <div className="shop-item" src={props.src} name={props.name} id={props.price} onClick={ onClick2} onMouseEnter={Hover} onMouseLeave={UnHover} >
                    <img src={props.src} name={props.name} id={props.price} style={styles.img}/>
                    <p className="name">{props.name}</p>
                    <p className="price">{props.price}</p>
                    {hover?  <p className="text-hover" src={props.src} name={props.name} id={props.price}>Click to add me to cart</p>: null} 

                </div>)
    }
    return(<div className="shop-front">
            <p className="title">{title}</p>

            { 
                items.map((obj)=>{
                return(<ShopItem src={obj.src}  name={obj.name} price={obj.price} key={obj.src} />)
            })}
    </div>)
}
export default Shop;