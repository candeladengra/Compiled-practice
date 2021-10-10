import React, {useState, Fragment} from 'react'

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5])

    const agregarElemento = () => {
        setArrayNumero([...arrayNumero, arrayNumero [arrayNumero.length - 1] + 1])
        if (arrayNumero.length == 0) {setArrayNumero([1])}}

    const eliminarElemento = () => {
        if (arrayNumero.length > 0) {
            const lastIndex = arrayNumero.length - 1;
            setArrayNumero(arrayNumero.filter((numero, index) => index !== lastIndex));
        }
    }

    return (
        <Fragment>
            <h1> Lista </h1>
            <button onClick={agregarElemento}> Agregar Elemento </button>
            <button onClick={eliminarElemento}> Eliminar Elemento </button>
            {
            arrayNumero.map(item => (
                <p> {item} </p>
                ))}
        </Fragment>
    )}

export default Lista
