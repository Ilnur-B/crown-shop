import React from 'react';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPagesComponent from "./pages/shop/shop-pages.component";

import {Route, Switch} from 'react-router-dom'



function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPagesComponent}/>
            </Switch>
        </div>
    );
}

export default App;
