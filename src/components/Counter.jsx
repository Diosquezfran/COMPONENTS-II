import React, { useState, useEffect } from 'react';

const Counter = () => {
    // Definición de dos estados: count para el valor y color para el color de fondo.
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("lightblue");

    // useEffect con un arreglo de dependencias vacío [].
    useEffect(() => {
        // Se ejecuta una vez en el montaje inicial del componente.
        console.log("useEffect con []");
    }, []);

    // useEffect con un arreglo de dependencias [count].
    useEffect(() => {
        // Se ejecuta cuando 'count' cambia.
        console.log("useEffect [count]");
    }, [count]);

    // useEffect con una función de limpieza.
    useEffect(() => {
        // Se ejecuta en el montaje inicial y al desmontar el componente.
        return () => console.log("elimino el listener");
    }, []);

    // Se ejecuta cada vez que el componente se monta o se actualiza.
    console.log("Montaje");

    return (
        <div style={{ backgroundColor: color }}>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <p>Valor: {count}</p>
            <button onClick={() => setCount(count - 1)}>Restar</button>
            <button onClick={() => setColor("lightgray")}>Cambiar de color</button>
        </div>
    );
}

export default Counter;
