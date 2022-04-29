
import React , {useEffect, useState}from 'react';
import uniqid from "uniqid";
import "../styles/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const styles={
    img:{
        width:150,
        height:230,
    },

    icon:{
        width:40,
        height:40
    },
    icon2:{
        width:20,
        height:20,
        color:"#D0EEEA"
    },
    icon3:{
        width:15,
        height:15,
        color:"#6FB8AE"
    }
}
const Checkout =(props)=>{
    const [items, setItems]=useState([]);
    const [sum, setSum]=useState(0);
    const [pay, setPay]=useState(false);
    useEffect(()=>{
        let summed=0;
        props.items.forEach((obj)=> {

            let preped=Number(obj.price.slice(0, -1));
            summed+=preped *obj.quantity;
            
            
        });
        setSum(summed);
        setItems(props.items);
        // for(let i=0; i<props.items.length; i++){
        //     setSum(sum)
        // }
        
        
        
    },[])

    const onClick=()=>{
        
        setPay(true);
        setTimeout(()=>{
            localStorage.clear()
        },1000)
        
    }
    const CheckoutItem=(props)=>{
        const [quantity, setQuantity]=useState(1);
        useEffect(()=>{
            setQuantity(props.quantity);

        },[])
        const Delete=(ev)=>{
            if(quantity==1){
               let itemz=items;
               let indx=items.findIndex(element=> element.name==ev.target.id);
               itemz.splice(indx, 1);
               setItems(itemz);
               localStorage.setItem("items", JSON.stringify(itemz) );

            }
            else{
                let itemz=items;
                setQuantity(quantity=>quantity-1);
                let indx=items.findIndex(element=> element.name==ev.target.id);
               let removed= itemz.splice(indx, 1);
               removed[0].quantity-=1;
               itemz.push(removed[0]);
               setItems(itemz);
               localStorage.setItem("items", JSON.stringify(itemz) );
                
            }
        
            
        }
        const Add=(ev)=>{
            setQuantity(quantity=> quantity+1);
            let itemz= items;
            let indx=items.findIndex(element=> element.name==ev.target.id);
            let removed= itemz.splice(indx, 1);
            removed[0].quantity+=1;
               itemz.push(removed[0]);
               setItems(itemz);
               localStorage.setItem("items",JSON.stringify(itemz) );

            

        }

        return(<div className="checkout-items">
                    <img src={props.src} style={styles.img}/>
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                    <button className='dropdown-btn' id={props.name} onClick={Delete}> <FontAwesomeIcon icon={faMinus} style={styles.icon3}/> </button>
                    <p>{quantity}</p>
                    <button className='dropdown-btn' name={props.price} id={props.src} title={props.title} onClick={Add}> <FontAwesomeIcon icon={faPlus} style={styles.icon3}/> </button>
                </div>)
    }
    // useEffect(()=>{
    //     setSum(sum=>sum+props.items[props.items.length-1].price);
    // },[props.items])
    return <div className='checkout-box'>
              

              
                {items.map((obj)=>{
                   return <CheckoutItem src={obj.src} name={obj.name} price={obj.price} key={obj.name} quantity={obj.quantity}/>
                })}
                <p className='sum'>Total :{sum}$</p>
                {pay?<div className='paybox'>
                    <p>Congratulations!</p>
                    <p>You don't have to pay, you'll get it all for free!</p>
                </div>: null}
                <button onClick={onClick} className='checkout-btn' id='pay'> Pay </button>
         </div>
}
export default Checkout;