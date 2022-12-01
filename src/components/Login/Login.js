import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className="row w-50 mx-auto">
                <h2>Welcome to Login</h2>
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
                <button className="btn btn-primary mt-3">Login</button>
                <p><small>Don't have an account? Please <Link to='/bootstrapForm'>Register</Link></small></p>
            </form>
        </div>
    );
};

export default Login;