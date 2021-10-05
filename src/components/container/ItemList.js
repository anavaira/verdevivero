import Item from "./Item";

const ItemList = ({items}) => items.map((item) => {
    return (<Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.pictureUrl}/>)
});

export default ItemList;