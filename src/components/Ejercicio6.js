import React, {useState, Fragment} from 'react'

const Ejercicio6 = () => {

    const [listener, setListener] = useState([])

    const guardarOpción = (event) => {
        setListener (event.target.value)
    }

    const agregarOpción = () => {
       const option = document.createElement("option");
        option.text = listener;
        option.value = listener;
        const select = document.getElementById("floatingSelectGrid");
        select.appendChild(option);
    }

    return (
        <Fragment>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating">
                    <input onChange = {guardarOpción} type="email" class="form-control" id="floatingInputGrid"/>
                    <label for="floatingInputGrid">Agregue opción</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                        <option className= "option" selected>Open this select menu</option>
                        <option className= "option" value="One">One</option>
                        <option className= "option" value="Two">Two</option>
                        <option className= "option" value="Three">Three</option>
                    </select>
                    <label for="floatingSelectGrid">Works with selects</label>
                    </div>
                </div>
                <hr/>
                <button onClick = {agregarOpción} type="button" class="btn btn-dark">Agregar opción</button>
            </div>
        
        </Fragment>
        )
        }

export default Ejercicio6
