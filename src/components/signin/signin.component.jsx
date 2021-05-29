import React from "react";
import './signin.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-buttun/custom-button.component'
import { signInWithGoogle } from "../../firebase/firebase.utils";


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { name , value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit}>

                    <FormInput label='email' value={this.state.email} onChange={this.handleChange} name='email' type="email"/>
                    <FormInput label='password' value={this.state.password} onChange={this.handleChange} name='password' type="password"/>
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>


                </form>
            </div>
        )
    }
}
export default Signin
