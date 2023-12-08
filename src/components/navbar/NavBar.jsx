import { Button } from "@mui/material"
import "./NavBar.css"
import CartWidget from "../cartwidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link to="/"><h2>LOGO</h2></Link>
            <Link to="/"><Button variant="contained" color="primary">todas</Button></Link>
            <Link to="/category/urbanas"><Button variant="contained" color="primary">urbanas</Button></Link>
            <Link to="/category/deportivas"><Button variant="contained" color="primary">deportivas</Button></Link>
            <CartWidget/>
        </ul>
    </nav>
  )
}

export default NavBar