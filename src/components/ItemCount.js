import React, {useState, useEffect} from 'react' 

const ItemCount =({stock = 0, initial = 1, onAdd})=>{
    
const [quantity, setQuantity] =useState (parseInt(initial));
    
    const decrement =()=>{
       if (quantity>1){
       setQuantity(quantity-1)}
    }
    const increment =()=>{
        if (quantity<stock){
            setQuantity(quantity+1)
    }}

    /*useEffect(()=>{
        setQuantity(parseInt(props.initial))
    },[parseInt(props.initial)])*/

    return(
    <>
    <button className="btn btn-secondary m-2" onClick={decrement}>-</button>
    <span >{quantity}</span>
    <button className="btn btn-secondary m-2" onClick={increment}>+</button>
    {quantity&&stock
    ? <button  className="btn btn-primary" onClick={()=> onAdd(quantity)}>Agregar al Carrito</button>
    :<button  className="btn btn-primary" disabled>Agregar al Carrito</button>
}
    </>
)}

export default ItemCount 