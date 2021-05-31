import React from "react";
import './signin-signup.styles.scss';
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SigninSignup = () => (
    <div className='signinSignup'>
        <Signin/>
        <SignUp/>
    </div>
)

export default SigninSignup
