import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/navbar/Layout"
import ItemListContainer from "./components/itemlist/ItemListContainer"
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer"
import Cart from "./components/cartwidget/Cart"
import  CartContextComponent  from "./components/context/CartContext"
import Checkout from "./components/checkout/Checkout"



function App() {
  return (
    <BrowserRouter>
    <CartContextComponent>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryName" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
    </Routes>
    </CartContextComponent>
    </BrowserRouter>
  )
}

export default App
