
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useState} from 'react' ;


const CartWidget= () => {
  const [cartNumber, setCartNumber] = useState (4);

  return (
    
      <Badge badgeContent={cartNumber} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    
  );
}
export default CartWidget;
