import React, {useState} from 'react' 

const ItemCount =(props)=>{
    
    let stock = props.stock

const [quantity, setQuantity] =useState (props.initial);
    
    const leftButton =()=>{
       if (quantity>1){
       setQuantity(quantity-1)}
    }
    const rightButton =()=>{
        if (quantity<stock){
            setQuantity(quantity+1)
    }}

    return(
    <>
    <button className="btn btn-secondary m-2" onClick={leftButton}>-</button>
    <span >{quantity}</span>
    <button className="btn btn-secondary m-2" onClick={rightButton}>+</button>
    </>
)}

export default ItemCount 