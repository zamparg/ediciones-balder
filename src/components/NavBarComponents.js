import { Link } from "react-router-dom"

/*NAVBAR*/
export const Logo = () =>{
    return (
        <Link to={"/"} className="navbar-brand" >
            <img src="../logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top"/>
                Ediciones Balder
        </Link>
    )
}

export const Toggler =() => {
    return(
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
    )
}

export const NavBarItems = ({categories})=>{
    
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {categories.map ((categorie)=> 
                    <li className="nav-item">
                        <Link to={'/category/'+categorie} className="nav-link active" aria-current="page" >{categorie}</Link>
                    </li>

                    )
                }
            </ul>
        </div>
         
    )
}
