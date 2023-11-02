import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hook/useAuth';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { createUser, googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirm) {
            setPasswordError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one capital letter");
            return;
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError("Password must contain at least one special character");
            return;
        }

        try {
            await createUser(email, password);
            alert("Successfully created");
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();

            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className='text-center text-5xl font-bold text-green-400 my-3'>Register</h1>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                            onBlur={(e) => setConfirm(e.target.value)}
                        />
                    </div>
                    {passwordError && (
                        <p className="text-center text-red-500">{passwordError}</p>
                    )}

                    <div className="form-control mt-2">
                        <button type="submit" className="btn btn-primary">
                            Sign up
                        </button>
                    </div></form>
                <p className="text-center text-sm">
                    Already have an account?{' '}
                    <NavLink
                        to="/login"
                        className="text-primary font-bold hover:underline cursor-pointer "
                    >
                        Login
                    </NavLink>
                </p>
                <div className="divider ">Or, Continue With</div>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn btn-outline btn-primary  w-full flex justify-between items-center cursor-pointer "
                >
                    Google
                    <FcGoogle className="w-8 h-8" />
                </button>

            </div>
        </div>
    );
};

export default Register;
