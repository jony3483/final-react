import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import BeatLoader from "react-spinners/BeatLoader";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../Firebase/firebaseConfig";


const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const { categoryName } = useParams()
    
    useEffect ( () => {

        let productsCollection = collection( db, "products" )

        let consulta = undefined

        if(!categoryName){
            consulta = productsCollection
        }else{
                consulta = query( productsCollection, where( "category", "==" ,categoryName ))
            }   

            getDocs(consulta).then ( res => {
                let newArray= res.docs.map( product => {
                    return {...product.data(), id: product.id}
                })
                setItems(newArray)
            })
        
    },[categoryName])

    return (
        <>
        {
            items.length === 0 ? (
                <div className="lodin">
                    <BeatLoader size={30} color="red" /> 
                </div>
                
            ) : (   
                <ItemList items={items}/>
            )
        }
         
        </>
  )
}

export default ItemListContainer