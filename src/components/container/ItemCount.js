import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    let [counter, setCounter] = useState(parseInt(initial, 10));
    let [msg, setMsg] = useState(null);

    const increase = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            setMsg('Superaste el límite de stock');
        };
    };

    const decrease = () => {
        setCounter(counter - 1);
        if (counter <= stock) {
            setMsg('');
        }
    };

    return (
        <>
            <div>
                <button onClick={decrease}>-</button>
                <p>{counter}</p>
                <button onClick={increase}>+</button>
            </div>
            <div>
            <button onClick={onAdd}>Agregar al carrito</button>
            </div>
            <div>
                <h1>{msg}</h1>
            </div>
        </>
    );
};

export default ItemCount;