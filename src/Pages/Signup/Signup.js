import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {user, signUp, updateUserProfile } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserUpdate(name);
                toast.success('Successfully Sign Up');
            })
            .catch(error => console.error(error));
    }

    const handleUserUpdate = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={image} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold">Signup now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>

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
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                    <p className='text-center pb-3'>Already have an account please <Link className='text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;