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
    <button className="btn btn-secondary" onClick={leftButton}>-</button>
    {quantity}
    <button className="btn btn-secondary" onClick={rightButton}>+</button>
    </>
)}

export default ItemCount 