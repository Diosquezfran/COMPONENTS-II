import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    // Estado para almacenar los datos de productos
    const [data, setData] = useState([]);
    
    // Estado para controlar si la carga está en progreso
    const [loading, setLoading] = useState(true);
    
    // Estado para manejar errores
    const [error, setError] = useState("");

    // Datos de productos (simulados)
    const productos = [
        { id: 1, name: "Producto A", price: 10.99, stock: 50 },
        { id: 2, name: "Producto B", price: 19.99, stock: 30 },
        { id: 3, name: "Producto C", price: 5.99, stock: 100 },
        { id: 4, name: "Producto D", price: 25.99, stock: 20 },
        { id: 5, name: "Producto E", price: 14.49, stock: 60 },
        { id: 6, name: "Producto F", price: 8.99, stock: 75 },
    ];

    // Función que simula una llamada asíncrona a una API o servidor
    const getProductos = () => new Promise((resolve, reject) => {
        let status = 200; // Simulamos una respuesta exitosa
        setTimeout(() => {
            if (status === 200) {
                // Resolvemos la promesa con los productos
                resolve(productos);
            } else {
                // Rechazamos la promesa con un mensaje de error
                reject("Ups, algo salió mal");
            }
        }, 2000);
    });

    // useEffect se ejecuta cuando el componente se monta ([] indica que se ejecuta una vez)
    useEffect(() => {
        // Llamamos a la función getProductos que simula una llamada asíncrona
        getProductos()
            .then((response) => {
                // Cuando la promesa se resuelve exitosamente, actualizamos el estado data
                setData(response);
            })
            .catch((error) => {
                // Si hay un error, actualizamos el estado error con un mensaje de error
                setError("Ups, algo salió mal");
            })
            .finally(() => {
                // Independientemente del resultado, marcamos la carga como completa
                setLoading(false);
            });
    }, []); // El efecto se ejecuta una vez al montar el componente

    return (
        <div>
            {loading && <p> Cargando...</p>}
            {error && <p> {error}</p>}
            {
                // Mapeamos los datos de productos y renderizamos cada uno usando el componente ItemList
                data.map((el) => (
                    <ItemList key={el.id} product={el} />
                ))
            }
        </div>
    )
}

export default ItemListContainer;
