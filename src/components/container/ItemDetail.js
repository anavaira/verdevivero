const ItemDetail = ({items, id}) => {
        return (
        <>
            <div className="itemDetail">
            {/* <img src={items[id].pictureUrl}></img> */}
            <h2>Detalle de {items[id].title}</h2>
            <h3>${items[id].price}</h3>
            <p>{items[id].description}</p>
        </div>
        </>
        )
    };

export default ItemDetail