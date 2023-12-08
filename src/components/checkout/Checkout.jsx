import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { collection, addDoc, updateDoc,doc } from "firebase/firestore"
import "./Checout.css"


const Checkout = () => {

    const [userInfo, setUserInfo]= useState({
        nombre:"",
        apellido:"",
        email:""
    });

    const [orderId, setOrderId] = useState(null)

    const { cart, getTotalPrice, clearCart } = useContext( CartContext )

    const total = getTotalPrice()

    const handleChange = (e) => {
        setUserInfo( {...userInfo,[e.target.name] : e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let order = {
            buyer : userInfo,
            items : cart,
            total,
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")

        addDoc( ordersCollection, order).then( (res)=> setOrderId(res.id) )

        cart.forEach( (e) => {
            updateDoc(doc(db, "products", e.id), {
                stock: e.stock - e.quantity,
            })
            clearCart()
        })

        

    }
  return (
   <>
   {
    orderId ? (
            <h2 style={{marginLeft:"800px", marginTop:"300px"}}>Gracias por su Compra su Nº de Ticket es :  {orderId}</h2>
    ) : (
        <div className="form">
        <h1>Ingrese sus Datos de Compra</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" onChange={handleChange} placeholder="nombre"/>
            <input type="text" name="apellido" onChange={handleChange} placeholder="apellido"/>
            <input type="text" name="email" onChange={handleChange} placeholder="email"/>
            <button className="xl">comprar</button>
        </form>
    </div>
    )
   }
   </>
  )
}

export default Checkout