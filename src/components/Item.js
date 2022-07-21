import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';


const Item =({info})=>{
    

        return(
    <>  
    
     <div className="card" style={{width: '18rem'}}>
     <img src={`../${info.miniatura}`} className="card-img-top" alt={info.titulo}/>
        <div className="card-body">
            <h5 className="card-title">{info.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.autor}</h6>
            <p className="card-text">{info.descripcion}</p>
            <p className="card-text">$ {parseInt(info.valor)}</p>
            <p className="card-text">stock: {parseInt(info.stock)}</p>
            <div><ItemCount stock={parseInt(info.stock)} initial ={parseInt(info.initial)}/></div>
            <button  className="btn btn-primary" >Agregar al Carrito</button>
            <Link to={`/item/${info.id}`}><button  className="btn btn-secondary" >Ver más</button></Link>
        </div>
    </div>
    </>)
}
 
export default Item