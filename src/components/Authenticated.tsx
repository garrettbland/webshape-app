import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

/**
 * Component that is used to wrap children that need to be
 * authenticated. If user is not logged in, they will be
 * sent to the login page
 */
export const Authenticated = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth()
    let location = useLocation()

    if (user) {
        return children
    }

    return <Navigate to="/login" replace={true} state={{ from: location }} />
}
