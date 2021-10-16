import {Link} from "react-router-dom"
import CartWidget from "./CartWidget";

const Nav = () => {
    return ( 
        <nav>
            <Link to="/"><h1>Verde Vivero</h1></Link>
            <ul>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="#">Quienes somos</Link></li>
                <li><Link to="#">Contacto</Link></li>
            </ul>
            <CartWidget />
        </nav>
     );
}
 
export default Nav;