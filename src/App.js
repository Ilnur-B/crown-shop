import React from 'react';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPagesComponent from "./pages/shop/shop-pages.component";

import {Route, Switch} from 'react-router-dom';
import Header from "./components/header/header.component";



function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPagesComponent}/>
            </Switch>
        </div>
    );
}

export default App;
