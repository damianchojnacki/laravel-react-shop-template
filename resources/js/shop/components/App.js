import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            loaded: false
        };

        this.checkIfLoaded = this.checkIfLoaded.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.checkIfLoaded);
    }

    checkIfLoaded = () => {
        this.setState({loaded: true});
    };

    render() {
        return (
            <Router>
                <div className="container">
                    {!this.state.loaded && <div className="loading"></div>}
                    <Switch>
                        <Route exact path="/" render={(props) => <Home {...props} loaded={this.state.loaded} />} />
                        <Route path="/login" render={(props) => <Login {...props} loaded={this.state.loaded} />} />
                        <Route path="/logout" render={(props) => <Login {...props} loaded={this.state.loaded} />} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
