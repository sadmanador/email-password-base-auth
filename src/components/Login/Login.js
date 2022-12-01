import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [successStatus, setSuccessStatus] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        setSuccessStatus(false)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setSuccessStatus(true)
        })
        .catch(error=> {
            console.error('error: ', error);
        })
    }


    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={handleLogin}>
                <input type="email" name='email' placeholder='Your Email' />
                <input type="password" name='password' placeholder='Your Password' /><br />
                <button type='submit'>Login</button>
            </form>
                {
                    successStatus && <p className='text-success'>Successfully login</p>
                }
                <p><small>Don't have an account? Please <Link to='/bootstrapForm'>Register</Link></small></p>
        </div>
    );
};

export default Login;