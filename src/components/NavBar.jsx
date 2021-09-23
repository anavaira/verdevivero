import CartWidget from "./CartWidget";

const Nav = () => {
    return ( 
        <nav>
            <h1>Verde Vivero</h1>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
     );
}
 
export default Nav;