import { NavLink } from "react-router-dom"
import useAuth from "../hook/useAuth"


const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div className="w-full m-auto max-w-[1200px]">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-2xl text-green-600 font-bold">Cleaner</div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-2">
                    {/* Navbar menu content here */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        contact
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Signup
                    </NavLink>

                    {user?.email ? (<button onClick={logout} className="btn btn-primary ">Logout</button>) :

                        (<NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            }
                        >
                            Signin
                        </NavLink>)
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar
