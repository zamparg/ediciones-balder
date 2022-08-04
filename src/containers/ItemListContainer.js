import ItemList from '../components/ItemList'
import React, {useState, useEffect} from 'react' ;
import {useParams} from 'react-router'
import {db} from "../Utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [data,setData]=useState([])
    const { id } = useParams()
    

    useEffect(()=>{
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
        .then(result=> setData(result.filter(item=> item.categoryId === id)))
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