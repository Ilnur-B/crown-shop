import React from 'react';
import CustomButton from "../custom-buttun/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        if (confirmPassword !== password) {
            console.log("passwords don't confirm")
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword( email, password )
            createUserProfileDocument( user, {displayName})
        }
        catch (error){
            console.log(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }



    render(){

        const { displayName, email, password, confirmPassword } = this.state;

        return(

            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        label='user'
                        value={displayName}
                        onChange={this.handleChange}/>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        onChange={this.handleChange}
                        value={email}/>
                    <FormInput
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        type='password'/>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='confirm password'
                        onChange={this.handleChange}
                        value={confirmPassword}/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>

        )
    }

}

export default SignUp
