import React, {useState} from 'react'

const Ejercicio4 = () => {

    const [selection, setSelection] = useState((''));

    const changeInputState = (event) => {
        setSelection(event.target.value)}

    const alertSelection = () => {
        alert (selection)
    }

    return (
        <div>
            <select onChange = {changeInputState} class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>
            <br/>
            
            <input value = {selection} type="text"/>
            
            <button  onClick = {alertSelection} type="button" class="btn btn-warning">Enviar</button>
        </div>
    )
}

export default Ejercicio4
