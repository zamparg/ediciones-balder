import { useContext } from "react"
import { CartContext} from '../context/CartContext'
import { Link } from "react-router-dom"
import Form from "./Form"
import { CartItem } from "./CartItem"

const Cart =()=>{

    const test = useContext(CartContext)
        
    
return (
    <div className="table card">
        
        <div className="card-header row">
            <h2 className="text-center">Carrito de compras</h2>
        </div>
        
        <div className="row"> 
            {
            test.cartList.length > 0 
            ? test.cartList.map(cartItem => (
                <CartItem item={cartItem}/>))
            :<div>
                <p>Tu carrito está vacío...</p>
                <div className="col"><Link to="/ediciones-balder/"><button  className="btn btn-primary" >Seguir comprando</button></Link></div>
            </div>
            }  
            
            {(test.cartList.length >0) 
                ?<Form/>
                :<></>
            }
                                   
        </div>
    </div>
)
}


export default Cart