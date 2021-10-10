import React, {Fragment, useState} from 'react'

const Formulario = () => {

    const [Datos, setDatos] = useState ({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
            setDatos({
                ...Datos, [event.target.name] : event.target.value
            })
        }

    const enviarDatos = (event) => {
        event.preventDefault();
        localStorage.setItem(Datos.nombre, Datos.apellido)
        console.log (Datos.nombre + ' ' + Datos.apellido)
    }

    return (
        <Fragment>
            <h1> Formulario</h1>
            <form className="row"> 
                <div className="col-md-3">
                    <input placeholder="Ingrese su nombre" className="form-control" type= "text" name= "nombre" onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese su apellido" className="form-control" type= "text" name= "apellido" onChange={handleInputChange}></input>
                </div>
                <div className="col-md-3">
                    <button className= "btn btn-primary" type= "submit" onClick={enviarDatos}> Enviar </button>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario
