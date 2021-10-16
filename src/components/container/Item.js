import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";


const Item = ({key, id, title, price, pictureUrl, stock}) => {
    const onAdd = () => {
        console.log('Agregado al carrito');
    }

    return (
        <div className="item">
            <img src={pictureUrl}></img>
            <h2>{title}</h2>
            <h3>${price}</h3>
            <button><Link to={`/products/${id}`}>Más información</Link></button>
            <ItemCount stock={stock} initial="1" onAdd={onAdd}/>
        </div>

    );
}

export default Item;