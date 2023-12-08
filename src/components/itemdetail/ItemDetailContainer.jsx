import { useContext, useEffect, useState } from "react"
import { products } from "../../products.Mock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { db} from "../../Firebase/firebaseConfig"
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [productSelected, setProductSelected] = useState([])
    const [showCounter, setShowConter] = useState(true)

    const { id } = useParams() 

    const { addToCart, getQuantityById}= useContext(CartContext)

    let totalQuantity = getQuantityById(+id)

    useEffect ( () => {
        
        let itemCollection = collection(db, "products")

        let refDoc = doc(itemCollection, id)
        
        getDoc(refDoc).then( (res) => {
          setProductSelected( {id: res.id, ...res.data()})
        })

    },[id])


    const onAdd = (cantidad) =>{
        let item = {
            ...productSelected,
            quantity:cantidad,
        }
        addToCart(item)

        Swal.fire({
        position: "center",
        icon: "success",
        title: "producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000
      });

      setShowConter(false)
    }

  return (
    <ItemDetail  showCounter={showCounter} productSelected={productSelected} onAdd={onAdd} initial={totalQuantity}/>
  )
}

export default ItemDetailContainer