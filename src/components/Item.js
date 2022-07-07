const Item =(props)=>{
    return(
    <>
     <div className="card" style={{width: '18rem'}}>
     <img src={require("../imgs/Parsifal.jpg").default} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.profesor}</h6>
            <p className="card-text">{props.descripcion}</p>
            <p className="card-text">$ {props.valor}</p>
            <a href="#" className="btn btn-primary">Agregar al Carrito</a>
        </div>
    </div>
    </>)
}

export default Item