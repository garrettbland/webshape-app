import { FormEvent, useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export const Login = () => {
    const { signIn, user } = useAuth()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
    }, [user])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const { error } = await signIn({ email, password })
        if (error) {
            alert('Problem signing in')
        }
        navigate('/dashboard')
    }

    return (
        <>
            {searchParams.get('sign_out') === 'successful' && (
                <div className="text-red-500">Logged out successful</div>
            )}

            <form onSubmit={handleSubmit}>
                <label htmlFor="input-email">Email</label>
                <input
                    id="input-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border"
                />

                <label htmlFor="input-password">Password</label>
                <input
                    id="input-password"
                    type="password"
                    value={password}
                    className="border"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </>
    )
}
