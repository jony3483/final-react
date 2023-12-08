import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "../footer/footer"
import "./Latoyut.css"



const Layout = () => {
  return (
    <div>
        <div className="header">
            <NavBar/>
        </div>
        <div className="main">
            <Outlet/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default Layout