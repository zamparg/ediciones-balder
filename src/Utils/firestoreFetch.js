import {db} from "../Utils/firebaseConfig"
import { collection, getDocs, orderBy, query, where, doc, getDoc } from "firebase/firestore";


 export const firestoreFetch = async (idCategory) => {
    let q
    if (idCategory) {
        q = query(collection(db, "products"), where("categoryId", "==", idCategory))
    } else {
        q = query(collection(db, "products"), orderBy("author"))
    }


    const querySnapshot = await getDocs(q);
    
    const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))        
    return dataFromFirestore
}

export const firestoreFetchOne = async (idProduct) => {
    
    const docRef = doc(db, "products", idProduct);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        
        return {
            id: docSnap.id,
            ...docSnap.data()
        }
    }else{
        console.log ("no hay documentos")
    }
}