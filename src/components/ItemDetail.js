import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"

const ItemDetail =({data})=>{
    
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + ' items')
        setItemCount(quantity)
    }

        return(
    <>  
    

    <div className="row">
        <div className="col-5 col-sm">
            <img src={`../${data.miniatura}`} className="img-fluid " alt={data.titulo}/>
        </div>
            <div className="col-7 col-sm">
            <h1 className="display-4">{data.titulo}</h1>
            <h2 className="display-9">{data.autor}</h2>
        
            <p className="lead">{data.descripcion}</p>
            <hr className="my-4"/>
            <p className="display-6">$ {data.valor}</p>
            <p className="display-6">Stock: {data.stock}</p>

            <div>
                {itemCount ===0 
                ?<ItemCount stock={data.stock} initial={0} onAdd={onAdd}/>
                :<Link to='/Cart'><button  className="btn btn-warning">Ir al Carrito</button></Link>
            }
                
            </div>
            

        </div>
        
    </div>
    </>)
}
 
export default ItemDetail