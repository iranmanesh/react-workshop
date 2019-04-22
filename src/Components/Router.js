import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import App from '../App';
import Blog from './Blog';
import NotFound from './NotFound';
import Contact from './Contact';
const Router = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={App} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;