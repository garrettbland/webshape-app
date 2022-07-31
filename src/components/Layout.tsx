import { Authenticated } from './Authenticated'
import { Outlet, Link } from 'react-router-dom'
import { Button } from './Button'
import { useNavigate, useLocation, useMatch } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { NavBar } from '../components/NavBar'

export const Layout = () => {
    let location = useLocation()
    const match = useMatch('/settings')
    const navigate = useNavigate()
    const { signOut } = useAuth()

    const pathArray = location.pathname.split('/').filter((_) => _)

    const handleSignOut = async () => {
        try {
            await signOut()
        } catch (err) {
            alert('Something went wrong signing out...')
        } finally {
            navigate('/login?sign_out=successful')
        }
    }

    const generateBreadCrumbs = () => {
        if (pathArray.length === 0) {
            return null
        }
        if (pathArray[0] === 'sites') {
            return (
                <>
                    <ArrowSmRightIcon className="w-5 h-5 text-gray-600" strokeWidth={1.6} />
                    <Link to={`/sites/${pathArray[1]}`} className="hover:underline">
                        {pathArray[1]}
                    </Link>
                    {pathArray.length > 2 && (
                        <>
                            <ArrowSmRightIcon className="w-5 h-5 text-gray-600" strokeWidth={1.6} />
                            <Link
                                to={`/sites/${pathArray[1]}/${pathArray[2]}`}
                                className="hover:underline"
                            >
                                {pathArray[2]}
                            </Link>
                        </>
                    )}
                </>
            )
        }
        return (
            <>
                <ArrowSmRightIcon className="w-5 h-5 text-gray-600" strokeWidth={1.6} />
                <Link to={pathArray[0]} className="hover:underline capitalize">
                    {pathArray[0]}
                </Link>
            </>
        )
    }

    return (
        <Authenticated>
            <>
                <NavBar />

                <div className="py-1">
                    <div className="max-w-3xl mx-auto w-full text-sm space-x-4 flex flex-row items-center">
                        <Link to={`/`} className="hover:underline">
                            Home
                        </Link>
                        {generateBreadCrumbs()}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto my-24 mt-18 mb-24 space-y-5">
                    <Outlet />
                </div>
            </>
            {/* <div className="max-w-6xl mx-auto">
                <div className="relative z-20 flex flex-row">
                    <div className="flex-1 ml-48">
                        <main className="relative z-20 px-5 my-12 max-w-4xl mx-auto space-y-5">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div> */}
        </Authenticated>
    )
}
