import { useContext } from "react"
import { CartContext} from './CartContext'
import { Link } from "react-router-dom"
import Form from "./Form"
import { CartItem } from "./CartComponents"

const Cart =()=>{

    const test = useContext(CartContext)
        
    
return (
    <>    
    <div className="table card">
        <div className="card-header row">
            <h2 className="text-center">Carrito de compras</h2>
        </div>
        <div className="row">
            <div className="col-9">
            {
            test.cartList.length > 0 
            ? test.cartList.map(cartItem => (
                <CartItem item={cartItem}/>
            ))
            :<div>
                <p>Tu carrito está vacío...</p>
                <div className="col"><Link to="/"><button  className="btn btn-primary" >Seguir comprando</button></Link></div>
            </div>
            }
            </div>    
            <div className="col-3"> 
                {(test.cartList.length >0) 
                    ?<>
                        <Form/>
                    </>
                    :<></>
                }
                            
            </div>
        </div>
        </div>
        
    </>
)
}


export default Cart