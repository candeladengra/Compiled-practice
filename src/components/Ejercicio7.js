import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";

const Ejercicio7 = (props) => {

    const navBarElements = props.navBarElements

    const listElements = navBarElements.map((navBarElement) =>
        <div> 
            <Router>
                <Link to= {`/Milircicio3/${navBarElement}`} className= "barElements"> 
                {navBarElement}
                </Link>
                <Switch>
                <Route path={`/Milircicio3/${navBarElement}`}>
                </Route>
                </Switch>
            </Router>
        </div>)

    return (
        <nav id = "navBar">
            {listElements} 
        </nav>
    )
}

export default Ejercicio7
