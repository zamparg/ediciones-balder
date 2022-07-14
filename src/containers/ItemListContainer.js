import ItemList from '../components/ItemList'
import Books from "../Utils/Books"
import React, {useState, useEffect} from 'react' ;



const ItemListContainer = () => {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        let is_ok=true
        
        const getData = new Promise ((resolve,reject)=>{
                if (is_ok){
                    setTimeout(() => {
                        resolve (Books)
                    }, 2000);
                }else{
                    reject("error")
                }
            })
        
        getData.then(result => setData(result))
            .catch(err => setData(err))

    }, [])




    return(

    <div className='row'>
        <h1>Libros</h1>
        <ItemList data={data}/>
    </div>

    )
} 
export default ItemListContainer