import React, {useState, useEffect} from 'react' 

const ItemCount =(props)=>{
    
    let stock = props.stock

const [quantity, setQuantity] =useState (parseInt(props.initial));
    
    const leftButton =()=>{
       if (quantity>1){
       setQuantity(quantity-1)}
    }
    const rightButton =()=>{
        if (quantity<stock){
            setQuantity(quantity+1)
    }}

    useEffect(()=>{
        setQuantity(parseInt(props.initial))
    },[parseInt(props.initial)])

    return(
    <>
    <button className="btn btn-secondary m-2" onClick={leftButton}>-</button>
    <span >{quantity}</span>
    <button className="btn btn-secondary m-2" onClick={rightButton}>+</button>
    </>
)}

export default ItemCount 