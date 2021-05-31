import React from 'react';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPagesComponent from "./pages/shop/shop-pages.component";
import SigninSignup from "./pages/signin-signup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import {Route, Switch} from 'react-router-dom';
import Header from "./components/header/header.component";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
            createUserProfileDocument(user)
            this.setState({currentUser: user})


            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPagesComponent}/>
                    <Route path='/signin' component={SigninSignup}/>
                </Switch>
            </div>
        );
    }

}

export default App;
