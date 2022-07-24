import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export const Auth = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth()
    let location = useLocation()

    if (user) {
        return children
    }

    return <Navigate to="/login" replace={true} state={{ from: location }} />
}
