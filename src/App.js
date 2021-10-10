import React from 'react'
import './App.css';
import Lista from './components/Lista';
import { BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import Nosotros from './components/Nosotros'
import Ejercicio2 from './components/Ejercicio2.js'
import Ejercicio4 from './components/Ejercicio4.js'
import Ejercicio5 from './components/Ejercicio5.js'
import Ejercicio6 from './components/Ejercicio6'
import Ejercicio7 from './components/Ejercicio7'
import Ejercicio8 from './components/Ejercicio8'
import Formulario from './components/Formulario'

function App() {
  const navBarElements = ['Inicio','Novedades', 'Nosotros','Carrito']
  return (
    <Router>
      <div id= "btns" className= "btn-group">
        <Link to= "/prueba" className="btn btn-dark" activeClassName="active">
          Ejercicio 1 
        </Link>
        <Link to= "/ejercicio2" className="btn btn-dark" activeClassName="active">
          Ejercicio 2
        </Link>
        <Link to= "/nosotros" className="btn btn-dark" activeClassName="active">
          Ejercicio 3 
        </Link>
        <Link to= "/Ejercicio4" className="btn btn-dark" activeClassName="active">
          Ejercicio 4 
        </Link>
        <Link to= "/Ejercicio5" className="btn btn-dark" activeClassName="active">
          Ejercicio 5
        </Link>
        <Link to= "/Ejercicio6" className="btn btn-dark" activeClassName="active">
          Ejercicio 6
        </Link>
        <Link to= "/Ejercicio7" className="btn btn-dark" activeClassName="active">
          Ejercicio 7
        </Link>
        <Link to= "/Ejercicio8" className="btn btn-dark" activeClassName="active">
          Ejercicio 8
        </Link>
        <Link to= "/Formulario" className="btn btn-dark" activeClassName="active">
          Ejercicio 9
        </Link>
      </div>
      <hr/>
      <Switch>
        <Route path="/prueba">
          <Lista></Lista>
        </Route>
        <Route path="/ejercicio2">
          <Ejercicio2/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/Ejercicio4">
          <Ejercicio4/>
        </Route>
        <Route path="/Ejercicio5">
          <Ejercicio5/>
        </Route>
        <Route path="/Ejercicio6">
          <Ejercicio6/>
        </Route>
        <Route path="/Ejercicio7">
          <Ejercicio7 navBarElements= {navBarElements} id = 'navBar'/>
        </Route>
        <Route path="/Ejercicio8">
          <Ejercicio8/>
        </Route>
        <Route path="/Formulario">
          <Formulario/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
