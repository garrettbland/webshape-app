import { FormEvent, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export const Signup = () => {
    const { signUp, user } = useAuth()
    const navigate = useNavigate()

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

        const { error } = await signUp({ email, password })
        if (error) {
            alert('Problem signing up...')
        }
        navigate('/login?confirm_email=true', { replace: true })
    }

    return (
        <>
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

                <button type="submit">Sign up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </>
    )
}
