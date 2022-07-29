import { useContext } from "react"
import { CartContext} from './CartContext'

const Cart =()=>{
    const test = useContext(CartContext)
    console.log (test)
return (
    <>
    <div className="card">
        <div className="card-header">
              Carrito de compras
        </div> 
                 
            {
            
        test.cartList.length > 0 && test.cartList.map(item => (
        
            <div className="card-body row">
                <div className="col-4">
                    <div className="">
                        <img src={item.miniatura} className="img-thumbnail max-width:25px"/>
                    </div>
                </div>
                <div className="col">
                    <h5 className="card-title">{item.titulo}</h5>
                    <p className="card-text">{item.autor}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
     
        ))
    }
       </div>
    </>
)
}


export default Cart