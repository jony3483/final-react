import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Cart.css"


const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext( CartContext )

  let total = getTotalPrice()

  const clearCartAlert = ()=> {
        Swal.fire({
            title: "quieres eliminar productos?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "si",
            denyButtonText: `no`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              clearCart()
                Swal.fire("eliminado", "", "success");
            } else if (result.isDenied) {
              Swal.fire("seguir comprando", "", "info");
            }
  }); 

  }
  return (
    <div className="cart">
        {
          cart.map ( (product) => ( 
            
            <div key={product.id} className="cartdet">
            <img src={product.img} className="imgcart"/>
            <h2>Marca: {product.title}</h2>
            <h2>/ Precio: $ {product.price}</h2>              
            <h2>/ cantidad: {product.quantity}</h2>
            
            <IconButton onClick={ ()=> deleteProductById( product.id)}>
            <DeleteForeverIcon color="secondary" fontSize="large"/>
            </IconButton>
            </div>
            )     )
        }

        {
          cart.length > 0 && (
            <div className="cartprecio">
            <h2>Total a Pagar: $ {total}</h2>
            <div className="cartbtn">
            <Link to="/checkout">
              <Button variant="contained" style={{margin:"10px"}}>Finalizar Compra</Button>
            </Link>

            <Button onClick={ clearCartAlert} variant="contained" style={{margin:"10px"}}>vaciar carrito</Button>
            </div>
           
            </div>

          )
        }



       
       
      
    </div>
  )
}

export default Cart