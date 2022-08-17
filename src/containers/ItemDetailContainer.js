import ItemDetail from '../components/ItemDetail'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'
import { firestoreFetchOne } from '../services/firestoreFetch';

const ItemDetailContainer = () => {
   
    const [data,setData]=useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        firestoreFetchOne(id)
        .then(result=> setData(result))
        .catch (err=> setData(err))
     }, [id])

    return(
    <div className='row'>
        <ItemDetail item={data}/>
    </div>
    )
}

export default ItemDetailContainer