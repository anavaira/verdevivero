import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    let [counter, setCounter] = useState(initial);

    // const increase = () => {
    //     setCounter(counter + 1);
    // };
    // const decrease = () => {
    //     setCounter(counter - 1);
    // };

    const onAdd = () => {

    }

    return (
        <>
            {/* <button onClick={decrease}>-</button>
            <p>{counter}</p>
            <button onClick={increase}>+</button> */}
            <button onClick={onAdd}>-</button>
            <p>{counter}</p>
            <button onClick={onAdd}>+</button>
        </>
    );
};

export default ItemCount;