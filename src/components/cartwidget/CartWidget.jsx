import LocalMall from '@mui/icons-material/LocalMall';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  let total = getTotalQuantity()
  
  return (
    <Link to="/cart">
    <Badge badgeContent={total} color="primary">
        <LocalMall color='primary' fontSize='large'/>
    </Badge>
    </Link>
  )
}

export default CartWidget