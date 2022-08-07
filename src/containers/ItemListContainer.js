import ItemList from '../components/ItemList'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'
import {firestoreFetch} from "../Utils/firestoreFetch"

const ItemListContainer = () => {
    const [data,setData]=useState([])
    const { id } = useParams()
    

    useEffect(()=>{
        firestoreFetch(id)
        .then(result=> setData(result))
        .catch (err=> setData(err))
       
     }, [id])
    
    return(

    <div className='row'>
        <h1>Libros</h1>
        <ItemList data={data}/>
    </div>

    )
} 
export default ItemListContainer