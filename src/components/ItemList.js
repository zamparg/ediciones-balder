import Item from "./Item"



const ItemList =({data})=>{
    return(
        <>
        {data.map(item=> 
                <Item key={item.titulo} info={item}/>
                /* 
                miniatura={item.miniatura}
                titulo={item.titulo}
                autor={item.autor}
                descripcion={item.descripcion}
                valor={item.valor}
                stock={item.stock}
                initial={item.initial}/> */
            )}
            </>
    )}

    
            
export default ItemList