import { PublicLayout } from '../components/PublicLayout'

export const ConfirmEmail = () => (
    <PublicLayout>
        <>
            <h1 className="text-3xl font-semibold mb-5">Sign up successful</h1>
            <p>
                Please check your email for a validation link to complete your signup. You can close
                this window.
            </p>
        </>
    </PublicLayout>
)
