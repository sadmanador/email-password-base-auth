import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [successStatus, setSuccessStatus] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        setSuccessStatus(false)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccessStatus(true)
            })
            .catch(error => {
                setErrorMessage(error)
            })
    }

    const handleOnBlurEmail = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleResetPassword = () => {
        if(!userEmail){
            alert('please insert email');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email send, please check your email and spam box')
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }


    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={handleLogin}>
                <input type="email" name='email' placeholder='Your Email' onBlur={handleOnBlurEmail} />
                <input type="password" name='password' placeholder='Your Password' /><br />
                <button type='submit'>Login</button>
            </form>
            {
                successStatus && <p className='text-success'>Successfully login</p>
            }
            {
                errorMessage && <p className='text-danger'>{errorMessage}</p>
            }
            <p><small>Don't have an account? Please <Link to='/bootstrapForm'>Register</Link></small></p>
            <p><small>Forget password? <button type="button" className="btn btn-link" onClick={handleResetPassword}>Reset Password</button></small></p>
        </div>
    );
};

export default Login;