import { Link } from 'react-router-dom';

const Item =({info})=>{
    

        return(
    <>  
    
     <div className="card" style={{width: '18rem'}}>
     <img src={info.thumbnail} className="card-img-top" alt={info.title}/>
        <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.author}</h6>
            <p className="card-text">{info.description}</p>
            <p className="card-text">$ {parseInt(info.valor)}</p>
            <p className="card-text">stock: {parseInt(info.stock)}</p>
            {/* <div><ItemCount stock={parseInt(info.stock)} initial ={0}/></div>
            <AddToCart/> */}
            
            <Link to={`/item/${info.id}`}><button  className="btn btn-secondary" >Ver más</button></Link>
        </div>
    </div>
    </>)
}
 
export default Item