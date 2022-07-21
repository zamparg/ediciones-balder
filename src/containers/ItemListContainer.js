import ItemList from '../components/ItemList'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'
import customFetch from '../Utils/customFetch';
import BDBooks from "../Utils/BDBooks"


const ItemListContainer = () => {
    const [data,setData]=useState([])
    const { id } = useParams()
    

    useEffect(()=>{
        if (id === undefined){
            customFetch (2000, BDBooks)
                .then(result=> setData(result))
                .catch (err=> setData(err))
        } else {
            customFetch(2000, BDBooks.filter(item=> item.categoryId.toLowerCase() === id))
                .then(result=> setData(result))
                .catch (err=> setData(err))
    }
     }, [id])
    



    return(

    <div className='row'>
        <h1>Libros</h1>
        <ItemList data={data}/>
    </div>

    )
} 
export default ItemListContainer