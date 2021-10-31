const ItemDetail = ({items,id}) => {
    console.log('itemdetail items', items)
        return (
        <>
        <div className="itemDetail">
            <img src={items.pictureUrl}></img>
            <h2>Detalle de {items.name}</h2>
            <h3>${items.price}</h3>
            <p>{items.description}</p>
        </div>
        </>
        )
        
    };

export default ItemDetail