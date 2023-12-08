import { Button } from "@mui/material"
import "./Count.css"


const CounterPresentacional = ({sumar, contador, restar, onAdd}) => {
  return (
    <div className="btn">
        <Button onClick={restar} variant="contained">restar</Button>
        <h2>{contador}</h2>
        <Button onClick={sumar} variant="contained">sumar</Button>
        <Button onClick={()=> onAdd(contador)} variant="contained">añadir a caarrito</Button>
    </div>
  )
}

export default CounterPresentacional