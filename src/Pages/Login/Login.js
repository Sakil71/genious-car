import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext);

    const handleLogin =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={image} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-3'>New to genius car please <Link className='text-orange-600' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;