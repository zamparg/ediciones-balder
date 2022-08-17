import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

/*CARRITO DE COMPRAS*/
export const CartItem = ({item})=>{
    const test = useContext(CartContext)
    
    return(
    <div className="col-9">
        <div className="row card-body">
            <div className="col-3">
                <Link to={`../item/${item.id}`}>
                <img src={item.thumbnail} className="rounded img-thumbnail miniatura" alt={item.title}/>
                </Link>
            </div>
            <div className="col">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.author}</p>
                <p className="card-text">Valor: ${item.price}</p>
            </div>
            <div className="col">
                    <h5 className="card-title ">cantidad: {item.quantity}</h5>
                    <p className="card-text">Total: ${item.price * item.quantity}</p>
                    <button href="#" className="btn btn-primary" onClick={()=> test.removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    </div>
    )
}
