import { NavLink } from "react-router-dom"


const Sidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200" >
            {/* Navbar menu content here */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                }
            >
                Home
            </NavLink>
            {/* Navbar menu content here */}
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
            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                }
            >
                Signin
            </NavLink>
        </ul>
    )
}

export default Sidebar
