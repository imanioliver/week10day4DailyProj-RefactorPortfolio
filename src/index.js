import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/Layout';
import Enter from './components/Enter'




ReactDOM.render(
    <BrowserRouter>

        <BaseLayout>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/cv" component={Portfolio}/>
                <Route path="/" component={Enter}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>



    , document.getElementById('root'));
registerServiceWorker();
