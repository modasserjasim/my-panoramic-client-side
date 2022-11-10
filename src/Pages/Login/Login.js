import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    //login with Google Account
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success(`You have successfully logged in as ${user.displayName}`);
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`Sorry! ${errorCode}`);
            })
    }

    // login with email and password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
                toast.success(`You have successfully logged in as ${user.displayName}`);

            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`Sorry! ${errorCode}`);
            })
    }

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl font-medium">Login</h1>
            <p className="text-slate-500">Hi, Welcome back 👋</p>

            <div className="my-5">
                <button onClick={handleGoogleLogin} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                </button>
            </div>
            <form onSubmit={handleLogin} className="my-10">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                    </label>
                    <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                    </label>
                    <div className="flex flex-row justify-end">
                        <div>
                            <Link to='/forgot-password' className="font-medium text-green-700">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="w-full py-3 font-medium text-white bg-green-700 hover:bg-green-600 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Login</span>
                    </button>
                    <p className="text-center">Not signup yet? <Link to='/signup' className="text-green-700 font-medium inline-flex space-x-1 items-center"><span>Signup now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg></span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;