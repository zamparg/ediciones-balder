
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useContext} from 'react' ;
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget= () => {

  const test = useContext(CartContext)
  
  return (
    <Link to="/Cart">
      <Badge badgeContent={test.totalProduct()|| "" } color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </Link>  
  );
}
export default CartWidget;
