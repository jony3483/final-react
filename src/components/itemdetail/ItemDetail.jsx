import { Link } from "react-router-dom"
import CounterContainer from "../count/CounterContainer"
import { Button } from "@mui/material"
import "./ItemDetail.css"



const ItemDetail = ({productSelected, onAdd, initial, showCounter}) => {
  return (
<>
    <div className="box">
        <img src={productSelected.img}/>
        <div className="detalle">
        <h2> Marca : {productSelected.title}</h2>
        <h3> Modelo : {productSelected.description}</h3>
        <h3> sotck : {productSelected.stock}</h3>
        <h2> Precio : {productSelected.price}</h2>
        </div>
        
        </div>
        
        
        {
          initial && <h4>ya tines {initial} unidades</h4>
        }
          

        {
          showCounter ? <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial}/> : <Link to="/cart">
          <Button variant="contained" style={{marginLeft:"1150px"}} >terminar compra</Button>
        </Link>
        }
        
        
        </>
  )
}

export default ItemDetail