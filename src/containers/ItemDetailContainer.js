import ItemDetail from '../components/ItemDetail'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'

import {db} from "../Utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";




const ItemDetailContainer = () => {
    const [data,setData]=useState([])
    const { id } = useParams()
    

    useEffect(()=>{
    //     if (id === undefined){
    //         customFetch (2000, BDBooks)
    //             .then(result=> setData(result))
    //             .catch (err=> setData(err))
    //     } else {
    //         customFetch(2000, BDBooks[parseInt(id)-1])
    //             .then(result=> setData(result))
    //             .catch (err=> setData(err))
    // }
    const firestoreFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
        
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data()
        }))
        
        return dataFromFirestore
        }

    if (id === undefined){
        firestoreFetch()
        .then(result=> setData(result))
        .catch (err=> setData(err)) 
    } else {

        firestoreFetch()
        .then(result=> setData(result.find(item=> item.id === id)))
        .catch (err=> setData(err))
 }
    
     }, [id])




    return(

    <div className='row'>
        <ItemDetail item={data}/>
    </div>

    )
} 
export default ItemDetailContainer