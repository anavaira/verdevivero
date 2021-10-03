import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return ( 
        <>
            <p>{props.grettings}</p>
            <ItemList />
        </>
     );
}
 
export default ItemListContainer;