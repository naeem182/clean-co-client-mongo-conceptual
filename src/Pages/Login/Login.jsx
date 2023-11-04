import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signin, googleLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const toastId = toast.loading('Logging in ...');
        try {
            await signin(email, password);
            navigate(location?.state ? location.state : '/');
            toast.success('Logged in', { id: toastId });
            // alert("successfully login")
        } catch (error) {
            console.log("Login error:", error);
            setError(error.message); // Set the error message
            toast.error('Logged in faild', { id: toastId });

        }
    };
    const handleGoogleLogin = async () => {


        try {
            await googleLogin(email, password);

            navigate(location?.state ? location.state : '/');
        } catch (error) {

        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className='text-center text-5xl font-bold text-green-400 my-3'>Login</h1>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            onBlur={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                            onBlur={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-center text-sm text-red-500">
                        {error}
                    </p>}

                    <div className="form-control mt-2">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p className="text-center text-sm">
                        Don't have an account?{' '}
                        <NavLink
                            to="/register"
                            className="text-primary font-bold hover:underline cursor-pointer"
                        >
                            Signup
                        </NavLink>
                    </p>
                    <div className="divider">Or, Continue With</div>
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-outline btn-primary w-full flex justify-between items-center cursor-pointer"
                    >
                        Google
                        <FcGoogle className="w-8 h-8" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
