import { useContext } from "react"
import { CartContext } from "./CartContext"

export const CartItem = ({item})=>{
    const test = useContext(CartContext)
    
    return(
        <div className="row card-body">
                    <div className="col-3">
                        <img src={item.thumbnail} className="rounded img-thumbnail miniatura" alt={item.title}/>
                    </div>
                    <div className="col">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.author}</p>
                        <p className="card-text">Valor: ${item.price}</p>

                        {/* <button className="btn btn-secondary m-2" onClick={()=> test.restItem(item.id)}>-</button>
                        <span >{item.quantity}</span>
                        <button className="btn btn-secondary m-2" onClick={()=> test.addItem(item.id)}>+</button> */}
                    </div>
                    <div className="col">
                            <h5 className="card-title ">cantidad: {item.quantity}</h5>
                            <p className="card-text">Total: ${item.price * item.quantity}</p>
                            <button href="#" className="btn btn-primary" onClick={()=> test.removeProduct(item.id)}>Eliminar producto</button>
                    </div>
                </div>
            
    )
}