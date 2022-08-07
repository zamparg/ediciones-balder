import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const NavBar = () =>{
    const test = useContext(CartContext)
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" >
                <img src="../logo192.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Ediciones Balder
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/category/Psicologia"} className="nav-link active" aria-current="page" >Psicología</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Astrologia"} className="nav-link active" aria-current="page" >Astrología</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Filosofia"} className="nav-link active" aria-current="page" >Filosofía</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Literatura"} className="nav-link active" aria-current="page" >Literatura</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Infantiles"} className="nav-link active" aria-current="page" >Infantiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Esoterismo"} className="nav-link active" aria-current="page" >Esoterismo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Arte"} className="nav-link active" aria-current="page" >Arte</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Educacion"} className="nav-link active" aria-current="page" >Educación</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Poesia"} className="nav-link active" aria-current="page" >Poesía</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Religion"} className="nav-link active" aria-current="page" >Religión</Link>
                        </li>
                    </ul>
                    <Link to={"/Cart"}>
                    Carrito de compras
                    </Link>
                    {
                        (test.cartList.length >0)
                        ?<Link to={"/Cart"}>
                    <CartWidget/>
                    </Link>
                        :""
                    }
                    
                </div>
                
            </div>
            
        </nav>   
        </>
    );
}

export default NavBar;