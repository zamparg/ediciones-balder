import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useState, useContext  } from "react"
import { CartContext} from '../context/CartContext'

const ItemDetail =({item})=>{
    
    const test = useContext(CartContext)
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + ' items');
        setItemCount(quantity);
        test.addToCart(item, quantity);
        }
    
    return(

    <div className="row">
        <div className="col-5 col-sm">
            <img src={item.thumbnail} className="img-fluid mx-auto d-block" alt={item.title}/>
        </div>
        <div className="col-7 col-sm">
            <h1 className="display-4">{item.title}</h1>
            <h2 className="display-9">{item.author}</h2>
        
            <p className="lead">{item.description}</p>
            <hr className="my-4"/>
            <p className="display-6">$ {item.price}</p>
            <p className="display-6">Stock: {item.stock}</p>

            <div>
                {itemCount ===0 
                ?<ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                :<>
                <Link to="/"><button className="btn btn-primary" >Seguir comprando</button></Link>
                <Link to='/Cart'><button className="btn btn-warning">Terminar mi Compra</button></Link>
                </>
            }    
            </div>
        </div>
    </div>
    )
}
 
export default ItemDetail