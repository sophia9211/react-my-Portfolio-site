import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Page/HomePage'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component ={HomePage} />
                </Switch>
            </Router>
        )
    }
}




export default Routes;