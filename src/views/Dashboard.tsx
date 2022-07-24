import { useAuth } from '../contexts/Auth'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const navigate = useNavigate()
    const { signOut } = useAuth()

    const handleSignOut = async () => {
        await signOut()
        navigate({
            pathname: '/login',
            search: '?sign_out=successful',
        })
    }

    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </>
    )
}
