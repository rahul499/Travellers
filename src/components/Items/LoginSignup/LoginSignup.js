import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {


  return (
    <div className="Login">

        <div className="main-content">

<form className="form-register" method="post" action="/">

    <div className="form-register-with-email">

        <div className="form-white-background">

            <div className="form-title-row">
                <h1>Create an account</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Name</span>
                    <input type="text" name="name" />
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Email</span>
                    <input type="email" name="email" />
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Password</span>
                    <input type="password" name="password" />
                </label>
            </div>

            <div className="form-row">
                <label className="form-checkbox">
                    <input type="checkbox" name="checkbox" checked />
                    <span>I agree to the <a href="/">terms and conditions</a></span>
                </label>
            </div>

            <div className="form-row">
                <button type="submit">Register</button>
            </div>
            <a href="/" className="form-log-in-with-existing">Already have an account? Login here &rarr;</a>
        </div>

        

    </div>

    <div className="form-sign-in-with-social">

        <div className="form-row form-title-row">
            <span className="form-title">Sign in with</span>
        </div>

        <a href="/" className="form-google-button">Google</a>
        <a href="/" className="form-facebook-button">Facebook</a>
        <a href="/" className="form-twitter-button">Twitter</a>

    </div>

</form>

</div>

    </div>
  );
}

export default LoginSignup;