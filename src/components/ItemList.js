import Item from "./Item"



const ItemList =({data})=>{
    return(
        <>
        {data.map(item=> 
                <Item key={item.id} info={item}/>
            )}
            </>
    )}

    
            
export default ItemList