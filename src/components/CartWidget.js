
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget= () => {
  return (
    
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    
  );
}
export default CartWidget;
