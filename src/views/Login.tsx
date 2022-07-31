import { FormEvent, useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { PublicLayout } from '../components/PublicLayout'
import { Button } from '../components/Button'

export const Login = () => {
    const { signIn, user } = useAuth()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const showLogoutMessage = searchParams.get('sign_out') === 'successful'
    const [isLoading, setLoading] = useState(false)
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            setInvalidLogin(false)
            setLoading(true)
            const { error } = await signIn({ email, password })
            if (error?.message === 'Invalid login credentials') {
                setInvalidLogin(true)
            } else {
                navigate('/')
            }
        } catch (err) {
            console.log(err)
            alert('Error. Something went wrong signing in')
        } finally {
            setLoading(false)
        }
    }

    return (
        <PublicLayout>
            <>
                {showLogoutMessage && (
                    <div className="bg-green-500 rounded-md w-full text-white p-5">
                        Logged out successful
                    </div>
                )}
                <div className="border rounded-md p-5">
                    <h2 className="text-3xl font-semibold mb-5">Login</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <input
                            className="px-3 py-2 w-full border rounded-md"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="px-3 py-2 w-full border rounded-md"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {invalidLogin && <div>Incorrect credentials. Please try again</div>}

                        <Button
                            type="primary"
                            title="Login"
                            buttonType="submit"
                            loading={isLoading}
                        />
                    </form>
                </div>
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="hover:underline">
                        Sign Up
                    </Link>
                </p>
            </>
        </PublicLayout>
    )
}
