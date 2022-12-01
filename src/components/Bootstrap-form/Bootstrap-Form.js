import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function BootstrapForm() {
    const [passwordError, setPasswordError] = useState('');
    const [successSignUp, setSuccessSignUp] = useState(false);

    const handleFormSubmit = event => {
        event.preventDefault();

        setSuccessSignUp(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[A-Z].*[A-z])/.test(password)) {
            setPasswordError('Please provide at least tow capital latter');
            return
        }
        if (password < 6) {
            setPasswordError('Password should be at least 6 character')
            return;
        }
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordError('Please have at least one special character')
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccessSignUp(true);
                form.reset();
                verifyEmail();
            })
            .catch(error => {
                console.error('error: ', error);
                setPasswordError(error.message);
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email and verify')
            })
    }

    return (
        <div className="w-50 mx-auto">
            <h3 className='text-warning'>Please register</h3>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {successSignUp && <p className='text-success'>User successfully created</p>}
                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            </Form>
        </div>
    );
}

export default BootstrapForm;