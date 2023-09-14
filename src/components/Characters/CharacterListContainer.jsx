import React, { useEffect, useState } from 'react';
import CharactersList from './CharacterList';

const CharacterListContainer = () => {
    // Estado para almacenar los datos de los personajes y el número de página actual
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    // Función para obtener datos de la API
    const getData = () => {
        // Realiza una solicitud fetch a la API de Rick and Morty
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((response) => response.json()) // Parsea la respuesta a formato JSON
            .then((data) => setData(data.results)) // Actualiza el estado con los resultados
            .catch((error) => console.log(error)); // Maneja cualquier error de la solicitud
    };

    // Funciones para cambiar de página
    const nextPage = () => {
        setPage(page + 1); // Incrementa el número de página
    };
    const prevPage = () => {
        setPage(page - 1); // Decrementa el número de página
    };

    // useEffect se utiliza para realizar la solicitud cuando cambia la página
    useEffect(() => {
        getData(); // Llama a la función getData() cuando 'page' cambia
    }, [page]); // El efecto se ejecuta cada vez que 'page' cambia

    return (
        // Renderiza el componente CharactersList y pasa los datos y funciones necesarios
        <CharactersList characters={data} nextPage={nextPage} prevPage={prevPage} page={page} />
    );
};

export default CharacterListContainer;
