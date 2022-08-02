
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useContext} from 'react' ;
import {CartContext} from './CartContext';


const CartWidget= () => {

  const test = useContext(CartContext)
  
  
  
  return (
    
      <Badge badgeContent={test.totalProduct()|| "" } color="secondary">
        <ShoppingCartIcon />
      </Badge>
    
  );
}
export default CartWidget;
