import { useUserContext } from "../context/UserContext"

const Dashboard = () => {

    const {user} = useUserContext()
    return (
        <>
            <p className="font-bold text-3xl">Dashboard</p>
            <p className="font-bold text-2xl">Bienvenido {user.name}</p>
        </>
    )
}

export default Dashboard