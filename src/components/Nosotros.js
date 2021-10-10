import React, { useEffect, useState} from 'react'

const Nosotros = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        
        obtenerDatos()
        
    },[])

    const obtenerDatos = async() => {
        const data= await fetch('https://jsonplaceholder.typicode.com/users')
        const users= await data.json()
        setEquipo(users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {equipo.map ( team => (
                    <li key={team.id}> {team.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nosotros
