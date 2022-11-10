import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    useTitle('Sign Up');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                console.log(user);
                navigate('/login')
                toast.success('Signup complete, please login now!');
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`${errorCode}`);
            })
    }
    // handle user profile update
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
            .then(() => {
                console.log('profile picture updated');
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`${errorCode}`);
            })
    }
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 -z-10">
            <h1 className="text-4xl font-medium text-center">Signup Today</h1>

            <form onSubmit={handleSignUp} className="my-10">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="name">
                        <input id="name" name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name" />
                    </label>
                    <label htmlFor="profile">
                        <input id="photo" name="photo" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your Profile Pic URL" />
                    </label>
                    <label htmlFor="email">
                        <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                    </label>
                    <label htmlFor="password">
                        <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                    </label>
                    <button type='submit' className="w-full py-3 font-medium text-white bg-green-700 hover:bg-green-600 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Signup Now</span>
                    </button>
                    <p className="text-center">Already have an account? <Link to='/login' className="text-green-700 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg></span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;