import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {doc, collection, setDoc, serverTimestamp, updateDoc, increment} from "firebase/firestore"
import { db } from "../Utils/firebaseConfig"

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();

    const test = useContext(CartContext)

    const createOrder =() =>{
        

        let itemsForDB = test.cartList.map (item => ({
            id: item.id,
            title: item.title,
            author: item.author,
            price: item.price,
            quantity: item.quantity,
        }))

        let order ={
            buyer: {
                email:email,
                name: name,
                phone: phone
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: test.totalPrice(),
        }
    
        const createOrderInFirestore = async () =>{    
        
            const newOrderRef = doc(collection(db,"orders"))   
            await setDoc(newOrderRef, order)
            return newOrderRef
        }
        
        createOrderInFirestore()
            .then(result => alert('Tu pedido ha sido realizado con Exito, el ID de tu compra es ' + result.id))
            .then (test.clearCart)
            .catch(err => alert('Error, por favor vuelve a intentarlo'))
        
            test.cartList.forEach(async (item) =>{
            const itemRef = doc(db, 'products', item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            })
        })
}


    return (
        <div className="card text-bg-dark mb-3">
        <div className="card-header">{test.totalProduct()} productos</div>
        <div className="card-header fw-bold">Total: ${test.totalPrice()}</div>
        <form className="form-group p-3">
            <label for="fname">Nombre:</label><br/>
            <input type="text" id="fname" className="form-control" name="fname" onChange={(e)=>setName(e.target.value)} value={name} required/><br/>
            <label for="email">Email:</label><br/>
            <input type="text" id="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/><br/>
            <label for="phone">Teléfono:</label><br/>
            <input type="phone" id="phone" className="form-control" name="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} required/>

            <div className="">
                <button href="#" type="button" className="btn btn-warning" onClick={()=> createOrder()}>Finalizar Compra</button>
            </div> 

            <div className="">
                <button href="#" type="button" className="btn btn-primary" onClick={()=> test.clearCart()}>Eliminar Carrito</button>
            </div>

            <div className="">
                <Link to="/"><button  type="button" className="btn btn-primary" >Seguir comprando</button></Link>
            </div>
            
        </form>
        </div>
    )
}

export default Form