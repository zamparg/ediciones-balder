import ItemCount from "./ItemCount"

const ItemDetail =({data})=>{
        return(
    <>  
    

    <div className="row">
        <div className="col-5 col-sm">
            <img src={data.miniatura} className="img-fluid " alt="..."/>
        </div>
            <div className="col-7 col-sm">
            <h1 className="display-4">{data.titulo}</h1>
            <h2 className="display-9">{data.autor}</h2>
        
            <p className="lead">{data.descripcion}</p>
            <hr className="my-4"/>
            <p className="display-6">$ {data.valor}</p>
            <p className="display-6">Stock: {data.stock}</p>

            <div>
                <ItemCount stock={data.stock} initial={data.initial}/>
            </div>
            <button  className="btn btn-primary" >Agregar al Carrito</button>

        </div>
        
    </div>
    </>)
}
 
export default ItemDetail