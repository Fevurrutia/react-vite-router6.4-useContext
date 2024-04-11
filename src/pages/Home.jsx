import { useUserContext } from "../context/UserContext"
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const {setUser} = useUserContext()

    const navigate = useNavigate()

    const handleLogin = () => {
        setUser({
            name: 'Franco',
            email: 'fevurrutia@gmail.com'
        })
        navigate('/dashboard')
    }

    return (
        <>
            <p className="font-bold text-3xl">Home</p>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Home