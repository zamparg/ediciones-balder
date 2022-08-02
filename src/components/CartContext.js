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
            product = {...item, quantity:quantity};
            newCartList = [...cartList, product]
        }

        setCartList (newCartList)
    }

    const clearCart = () => {
        setCartList([])
    }


    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const addItem = (id) =>{
        let newCartList
        let recortedList
        let product = cartList.find(product => product.id === id); 
        recortedList = cartList.find(product => product.id !== id);
        product.quantity += 1
        
        newCartList = [...recortedList, product]
        console.log(newCartList)
        setCartList (newCartList)
    }    

    const restItem = (id) =>{
        let newCartList
        let product = cartList.find(product => product.id === id); 
        let recortedList = cartList.find(product => product.id !== id)
        product.quantity -= 1
        newCartList=[...recortedList, product]
        setCartList (newCartList)
    }

    const totalPrice =()=>{
        let total=0
        cartList.forEach(element => {
            total += (element.valor * element.quantity)
            
        });
        return total
    }
    
    const totalProduct =()=>{
        let total=0

        cartList.forEach(element => {
            total += element.quantity
        });

        return total
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, isInCart, removeProduct, addItem, restItem, totalPrice, totalProduct}}>
            {children}
        </CartContext.Provider>
    )
}
