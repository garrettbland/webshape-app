import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useState } from 'react'

export const Account = () => {
    const navigate = useNavigate()
    const { signOut } = useAuth()
    const [isSigningOut, setSigningOut] = useState(false)
    const [isDeleting, setDeleting] = useState(false)

    const handleSignOut = async () => {
        try {
            setSigningOut(true)
            await signOut()
        } catch (err) {
            alert('Something went wrong signing out...')
        } finally {
            setSigningOut(false)
            navigate('/login?sign_out=successful')
        }
    }

    const test = () => {
        setDeleting(true)
    }

    return (
        <>
            <Card
                title="Sign Out"
                description="Sign out of your account. You will be taken to the login screen."
            >
                <Button
                    title="Sign Out"
                    type="primary"
                    onClick={() => handleSignOut()}
                    loading={isSigningOut}
                />
            </Card>
            <Card
                title="Delete Account"
                description="This will completely delete your account, sites, and any data associated."
            >
                <Button
                    title={`${isDeleting ? 'Deleting' : 'Delete'} Account`}
                    type="danger"
                    onClick={test}
                    loading={isDeleting}
                />
            </Card>
        </>
    )
}
