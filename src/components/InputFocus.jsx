import React, { useRef } from 'react';
import Button from './Button';

const InputFocus = () => {
    // Crear una referencia (ref) para el elemento input
    const inputRef = useRef(null);

    const handlerClick = () => {
        // Imprime la referencia al elemento input en la consola.
        console.log(inputRef);

        // Llama al método `focus()` en la referencia para enfocar el elemento input.
        inputRef.current.focus();
    }

    return (
        <div>
            {/* Asigna la referencia `inputRef` al elemento input */}
            <input ref={inputRef} type='text' />

            <Button cb={handlerClick}>CLICK ME</Button>
        </div>
    );
}

export default InputFocus;
