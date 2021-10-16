import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const GetItems = new Promise( (resolve, rejected) => {
    const products = [
        {
            id: 1,
            name: "singonio",
            price: 440,
            stock: 5,
            pictureUrl: "img/singonio.jpg",
            description: "El singonio es una planta de interior resistente e ideal para aquellas personas que empiezan a aficionarse al cultivo de las plantas de interior. Es originaria de Sudamérica y posee unas hojas grandes con forma de flecha de color verde claro jaspeado con los nervios muy marcados."
        },
        {
            id: 2,
            name: "maranta",
            price: 460,
            stock: 5,
            pictureUrl: "img/maranta.jpg",
            description: "La maranta, al igual que la calatea y el estenante, es originaria de los bosques húmedos de Brasil, y, al contrario que éstas, tiene un porte semirrastrero. Sus tallos no tienen fuerza para erguirse por sí solos, y actúan como una planta cubresuelos."
        },
        {
            id: 3,
            name: "malvón",
            price: 480,
            stock: 5,
            pictureUrl: "img/malvon.jpg",
            description: "Los malvones son herbáceas perennes que crecen muy bien en el suelo y en macetas. Son muy fáciles de cultivar y se destacan por su gran resistencia, sobre todo al calor más extremo."
        },
        {
            id: 4,
            name: "tradescantia",
            price: 160,
            stock: 5,
            pictureUrl: "img/tradescantia.jpg",
            description: "Actualmente esta planta de interior se integra dentro del género Tradescantia, pues antes se consideraba el género Rhoeo como diferente. Es originaria de América Central."
        },
        {
            id: 5,
            name: "monstera",
            price: 2700,
            stock: 5,
            pictureUrl: "img/monstera.jpg",
            description: "El hábitat natural de la Monstera deliciosa se encuentra en las selvas tropicales de América del Sur. Crece en el sotobosque, la vegetación que se encuentra por debajo de las copas de los árboles. Esto le proporciona abundante sombra y una temperatura templada."
        },
        {
            id: 6,
            name: "potus",
            price: 230,
            stock: 5,
            pictureUrl: "img/potus.jpg",
            description: "Epipremnum aureum, comúnmente conocido como potus, pothos o potos (antiguamente clasificado a dentro del género Pothos y, por esto, conocido habitualmente bajo este nombre) es una especie de la familia Araceae nativa del sudeste asiático (Malasia, Indonesia) y Nueva Guinea."
        }
    ];
    setTimeout (() => products ? resolve(products) : rejected(console.log('Rechazado')), 2000);
});

const ItemDetailContainer = () => {

    const resultado = useParams();
    console.log(resultado)

    const [products, setProducts] = useState(null)

    useEffect(()=>{
        GetItems.then(p => setProducts(p))
    })

    return ( 
        <>
            {()=> products ? <ItemDetail items={products} id={resultado.match} /> : <h2>Cargando</h2>}
        </>
    );

}

export default ItemDetailContainer