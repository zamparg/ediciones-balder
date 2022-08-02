import { useContext } from "react"
import { CartContext} from './CartContext'
import { Link } from "react-router-dom"

const Cart =()=>{
    const test = useContext(CartContext)

return (
    <>
    <div className="card">
        <div className="card-header">
              <h2 className="text-center">Carrito de compras</h2>
        </div> 
                 
            {
            
        test.cartList.length > 0 && test.cartList.map(item => (
        
            <div className="row card-body">
                <div className="col-3">
                    <img src={item.miniatura} className="rounded img-thumbnail miniatura" alt={item.titulo}/>
                </div>
                <div className="col">
                    <h5 className="card-title">{item.titulo}</h5>
                    <p className="card-text">{item.autor}</p>
                    <p className="card-text">Valor: ${item.valor}</p>

                    {/* <button className="btn btn-secondary m-2" onClick={()=> test.restItem(item.id)}>-</button>
                    <span >{item.quantity}</span>
                    <button className="btn btn-secondary m-2" onClick={()=> test.addItem(item.id)}>+</button> */}

              </div>
              <div className="col ">
                    <h5 className="card-title ">cantidad: {item.quantity}</h5>
                    <p className="card-text">Total: ${item.valor * item.quantity}</p>
                    <button href="#" className="btn btn-primary" onClick={()=> test.removeProduct(item.id)}>Eliminar producto</button>
              </div>
            </div>
     
        ))
    }
        <div className="row"> 
                    {
                        (test.cartList.length >0) 
                        ?<>
                            <div className="col ">
                                <button href="#" className="btn btn-primary" onClick={()=> test.clearCart()}>Eliminar Carrito</button>
                            </div>
                            <div className="col">
                                <Link to="/"><button  className="btn btn-primary" >Seguir comprando</button></Link>
                            </div>
                            <div className="col ">
                                <button href="#" className="btn btn-warning" onClick={()=> test.clearCart()}>Finalizar Compra</button>
                            </div> 
                            <div className="col ">
                                <h5 className="card-title ">Total: ${test.totalPrice()}</h5>
                            </div>
                        </>
                        :<div>
                            <span>Carrito Vacío...</span>
                            <div className="col"><Link to="/"><button  className="btn btn-primary" >Seguir comprando</button></Link></div>
                        </div>
                    }
                    
              </div>
              </div>
            
    </>
)
}


export default Cart