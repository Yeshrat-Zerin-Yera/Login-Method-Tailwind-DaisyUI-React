import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            alert('Password must be at least 6 character.');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            })
    }

    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className='text-2xl font-semibold'>Sign Up</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <Link className="label-text-alt link link-hover" to='/login'>Already have an account? Please login.</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <button className='btn btn-circle'><FaGoogle /></button>
                        <button className='btn btn-circle mx-2'><FaFacebook /></button>
                        <button className='btn btn-circle'><FaGithub /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;