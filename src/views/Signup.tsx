import { FormEvent, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { PublicLayout } from '../components/PublicLayout'
import { Button } from '../components/Button'

export const Signup = () => {
    const { signUp, user } = useAuth()
    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [invalidSignIn, setInvalidSignIn] = useState(false)
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
            setLoading(true)
            const { error } = await signUp({ email, password })
            if (error) {
                console.log(error)
                setInvalidSignIn(true)
            } else {
                navigate('/signup/confirm', { replace: true })
            }
        } catch (err) {
            alert('Error. Something went wrong signing up.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <PublicLayout>
            <>
                <div className="border rounded-md p-5">
                    <h2 className="text-3xl font-semibold mb-5">Sign Up</h2>
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
                        {invalidSignIn && <div>Error. Please try again</div>}
                        <Button
                            type="primary"
                            title="Sign Up"
                            buttonType="submit"
                            loading={isLoading}
                        />
                    </form>
                </div>
                <p>
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </>
        </PublicLayout>
    )
}
