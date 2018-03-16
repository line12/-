import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react'
import {HashRouter as Router} from 'react-router-dom';
import history from './router/history/history';
import Navs from "./components/nav/navs"
import './App.css';

class AppModel {
    @observable str = '哈哈哈'
}

@observer
class App extends Component {
    constructor() {
        super();
        this.model = new AppModel();
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Navs/>
                </Router>
            </div>
        );
    }
}

export default App;
