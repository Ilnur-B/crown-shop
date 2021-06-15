import React from 'react';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPagesComponent from "./pages/shop/shop-pages.component";
import SigninSignup from "./pages/signin-signup/signin-signup.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import {Route, Switch, Redirect} from 'react-router-dom'
import Header from "./components/header/header.component";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";


class App extends React.Component {


    unsubscribeFromAuth = null;


    componentDidMount() {

        const {setCurrentUser} = this.props


        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }
            setCurrentUser(userAuth)
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPagesComponent}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SigninSignup/>)}/>
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

const mapDispatcherProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatcherProps)(App);
