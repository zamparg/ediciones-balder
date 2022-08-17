import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NavBarItems, Logo, Toggler } from './NavBarComponents';

const NavBar = () =>{
    
    const test = useContext(CartContext)
    const categories =["Psicologia", "Astrologia", "Filosofia", "Literatura", "Infantiles", "Esoterismo","Arte", "Educacion", "Poesia", "Religion"]
    
    return(
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Logo/>
                <Toggler/>
                <NavBarItems categories={categories}/>
                <Link to={"/Cart"}>Carrito de compras</Link>
                {
                (test.cartList.length >0)
                    ?<CartWidget/>
                    :""
                }                
            </div>
        </nav>   
    );
}

export default NavBar;