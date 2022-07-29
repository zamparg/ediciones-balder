import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider=({children})=>{
    
    const [cartList, setCartList] = useState([])
    
    const isInCart = (id) => {
        return cartList.findIndex(el => el.id === id)
    }

    const addToCart = (item, quantity) => {
        
        let newCartList

        let product = cartList.find(product => product.id === item.id);

        if (isInCart(parseInt(item.id)) !== -1){
            let recortedList
            product.quantity += quantity
            recortedList = cartList.find(product => product.id !== item.id)
            newCartList=[...recortedList, product]
        }else {
            product = {...item, quantity:{quantity}};
            newCartList = [...cartList, product]
        }

        setCartList (newCartList)
    }

    const clearCart = () => {
        setCartList([])
    }

    

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, isInCart, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}
