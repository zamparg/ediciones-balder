import ItemDetail from '../components/ItemDetail'
import Books from "../Utils/Books"
import React, {useState, useEffect} from 'react' ;



const ItemDetailContainer = () => {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        let is_ok=true
        
        const getData = new Promise ((resolve,reject)=>{
                if (is_ok){
                    setTimeout(() => {
                        resolve (Books[0])
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
        <ItemDetail data={data}/>
    </div>

    )
} 
export default ItemDetailContainer