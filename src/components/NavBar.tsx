import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export const NavBar = () => {
    const { signOut } = useAuth()

    const handleSignOut = async () => {
        try {
            await signOut()
        } catch (err) {
            alert('Error. Something went wrong signing out')
        }
    }

    return (
        <nav className="py-3 border-b">
            <div className="max-w-3xl mx-auto flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <Link to={`/`} className="hover:underline">
                        WebShape
                    </Link>
                </div>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </nav>
    )
}
