const ItemDetail = ({items,id}) => {
    console.log('itemdetail items', items)
        return (
        <>
        <div className="itemDetail">
            <img src={items[id].pictureUrl}></img>
            <h2>Detalle de {items[id].name}</h2>
            <h3>${items[id].price}</h3>
            <p>{items[id].description}</p>
        </div>
        </>
        )
        
    };

export default ItemDetail