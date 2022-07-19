import Item from "./Item"



const ItemList =({data})=>{
    return(
        <>
        {data.map(item=> 
                <Item key={item.titulo} info={item}/>
            )}
            </>
    )}

    
            
export default ItemList