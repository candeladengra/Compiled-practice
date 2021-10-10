import React, { useState } from 'react'

const Ejercicio8 = () => {

    const [picture, setPicture] = useState(null);
    const onChangePicture = e => {
    if (e.target.files[0]) {
      setPicture(URL.createObjectURL(e.target.files[0]))
      console.log(picture);
    }}

    return (
        <div>
            <div class="input-group mb-3">
            <input onChange = {onChangePicture} type="file" class="form-control" id="inputGroupFile02"/>
            </div>
            <img id = "pic" src={picture && picture}/>
        </div>
    )
}

export default  Ejercicio8
