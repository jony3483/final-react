import { useState } from "react"
import CounterPresentacional from "./CounterPresentacional"
import Swal from "sweetalert2"


const CounterContainer = ({stock, onAdd, initial=1}) => {
    const [contador, setContador] = useState(initial)

    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        } else{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "sin stock",
                showConfirmButton: false,
                timer: 1000
              });
            
        }
    }
    const restar = () => {
        if(contador > 1){
        setContador(contador - 1 )
        }
    } 

     return (
        <CounterPresentacional sumar={sumar} restar={restar} contador={contador} onAdd={onAdd}/>
     )
}

export default CounterContainer