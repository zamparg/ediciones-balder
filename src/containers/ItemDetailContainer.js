import ItemDetail from '../components/ItemDetail'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'
import customFetch from '../Utils/customFetch';
import BDBooks from "../Utils/BDBooks"


const ItemDetailContainer = () => {
    const [data,setData]=useState([])
    const { id } = useParams()
    

    useEffect(()=>{
        if (id === undefined){
            customFetch (2000, BDBooks)
                .then(result=> setData(result))
                .catch (err=> setData(err))
        } else {
            customFetch(2000, BDBooks[parseInt(id)-1])
                .then(result=> setData(result))
                .catch (err=> setData(err))
    }
     }, [id])




    return(

    <div className='row'>
        <ItemDetail data={data}/>
    </div>

    )
} 
export default ItemDetailContainer