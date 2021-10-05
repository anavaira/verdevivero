import React, {useState} from "react";
import ItemList from "./ItemList";

const task = new Promise( (resolve, rejected) => {
    const products = [
        {
            id: 1,
            name: "singonio",
            price: 440,
            stock: 5,
            pictureUrl: "img/singonio.jpg"
        },
        {
            id: 2,
            name: "maranta",
            price: 460,
            stock: 5,
            pictureUrl: "img/maranta.jpg"
        },
        {
            id: 3,
            name: "malvón",
            price: 480,
            stock: 5,
            pictureUrl: "img/malvon.jpg"
        },
        {
            id: 4,
            name: "tradescantia",
            price: 160,
            stock: 5,
            pictureUrl: "img/tradescantia.jpg"
        },
        {
            id: 5,
            name: "monstera",
            price: 2700,
            stock: 5,
            pictureUrl: "img/monstera.jpg"
        },
        {
            id: 6,
            name: "potus",
            price: 230,
            stock: 5,
            pictureUrl: "img/potus.jpg"
        }
    ];
    setTimeout (() => products ? resolve(products) : rejected(console.log('Rechazado')), 2000);
});

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    task.then(p => setProducts(p))

    //tener acá la promesa y que devuelva un array con nuestros productos
    // usar el state y el use effect 
    return ( 
        <>
            <p>{props.grettings}</p>
            <ItemList items={products}/>
        </>
     );
}
 
export default ItemListContainer;