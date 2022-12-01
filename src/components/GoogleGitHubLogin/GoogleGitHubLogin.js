import React from 'react';
import {getAuth} from "firebase/auth";
import app from './../../firebase/firebase.init';

const auth = getAuth(app)

const handleRegister = event => {
    //prevents the default nature of form submit.
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
  
  //onChange handler can detect the change
  const handleEmailChange = event => {
    const email = event.target.value;
  }
  
  const handlePasswordChange = event => {
    const password = event.target.value
  }
  
  const handleEmailOnBlur = event => {
    const email = event.target.value;
  }
  
  const handleEmailOnFocus = event => {
    const email = event.target.value;
  }

const GoogleGitHubLogin = () => {
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input onChange={handleEmailChange} onBlur={handleEmailOnBlur} onFocus={handleEmailOnFocus} type="email" name="email" id="" placeholder='Your Email' /><br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder='Your Password' /><br />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default GoogleGitHubLogin;