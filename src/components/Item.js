import ItemCount from "./ItemCount"

const Item =({info})=>{
        return(
    <>  
    
     <div className="card" style={{width: '18rem'}}>
     <img src={info.miniatura} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{info.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.autor}</h6>
            <p className="card-text">{info.descripcion}</p>
            <p className="card-text">$ {info.valor}</p>
            <p className="card-text">stock: {info.stock}</p>
            <div><ItemCount stock={info.stock} initial ={info.initial}/></div>
            <button  className="btn btn-primary" >Agregar al Carrito</button>
        </div>
    </div>
    </>)
}
 
export default Item