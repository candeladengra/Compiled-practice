import React, { useState } from 'react'

const Ejercicio2 = () => {

    const [listener, setListener] = useState((''));

    const handleInputChange = (event) => {
        setListener(event.target.value)
    }

    return (
        <div>
            <form>
                <div class="row">
                    <div class="col">
                    <input className= "myInput" type="text" class="form-control" onChange={handleInputChange} value={listener} autoSize/> 
                    </div>
                    <div class="col">
                    <input className= "myInput" type="text" class="form-control" onChange={handleInputChange} value={listener} autoSize/> 
                    </div>
                    <div class="col">
                    <input className= "myInput" type="text" class="form-control" onChange={handleInputChange} value={listener} autoSize/>  
                    </div>
                    <div class="col">
                    <input className= "myInput" type="text" class="form-control" onChange={handleInputChange} value={listener} autoSize/>  
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Ejercicio2
