import React, {useState, useEffect } from 'react'

const Ejercicio5 = () => {

    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');

    const saveContentFirstInput = (event) => {
        setContent1(event.target.value)
        localStorage.setItem('Data1', event.target.value)
    }

    const saveContentSecondInput = (event) => {
        setContent2(event.target.value)
        localStorage.setItem('Data2', event.target.value)
    }

    const saveContentThirdInput = (event) => {
        setContent3(event.target.value)
        localStorage.setItem('Data3', event.target.value)
    }

    useEffect (() => {
        const savedData1 = localStorage.getItem('Data1')
        const savedData2 = localStorage.getItem('Data2')
        const savedData3 = localStorage.getItem('Data3')
        setContent1 (savedData1)
        setContent2 (savedData2)
        setContent3 (savedData3)
    })

    return (
        <form>
        <div class="row">
            <div class="col">
            <input className= "myInput" onChange = {saveContentFirstInput} type="text" class="form-control" value={content1}/> 
            </div>
            <div class="col">
            <input className= "myInput" onChange = {saveContentSecondInput} type="text" class="form-control" value={content2}/> 
            </div>
            <div class="col">
            <input className= "myInput" onChange = {saveContentThirdInput}type="text" class="form-control" value={content3}/>  
            </div>
        </div>
        </form>
        )
}

export default Ejercicio5
