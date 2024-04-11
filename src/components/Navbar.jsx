import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const Navbar = () => {
    const {user, setUser} = useUserContext()
    return(
        <div>
            <nav className="flex gap-5 py-3 px-5 bg-black text-white font-semibold text-lg">
                <NavLink to='/'> Home </NavLink>
                {
                    user && (
                        <>
                            <NavLink to='/dashboard'> Dashboard </NavLink>
                            <button className="border-none px-4 rounded-md bg-red-700" onClick={() => setUser(false)}>Logout</button>
                        </>
                    )
                }
            </nav>
        </div>
    )
}

export default Navbar