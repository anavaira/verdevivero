import ItemCount from "./ItemCount";

const Item = ({id, title, price, pictureUrl, stock}) => {
    const onAdd = () => {
        console.log('Agregado al carrito');
    }

    return (
        <div className="item">
            <img src={pictureUrl}></img>
            <h2>{title}</h2>
            <h3>${price}</h3>
            <ItemCount stock={stock} initial="1" onAdd={onAdd}/>
        </div>

    );
}

export default Item;