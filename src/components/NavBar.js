import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'

const NavBar = () =>{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="../logoAE.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Arte-Escuela
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dibujo y pintura</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Música</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Diseño Gráfico</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Craft</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
                
            </div>
            
        </nav>   
        </>
    );
}

export default NavBar;