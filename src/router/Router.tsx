import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import { Auth } from '../components/PrivateRoute'

import { Dashboard } from '../views/Dashboard'
import { Login } from '../views/Login'
import { Signup } from '../views/Signup'
import { ConfirmEmail } from '../views/ConfirmEmail'

export const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Auth>
                                <Dashboard />
                            </Auth>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <Auth>
                                <Dashboard />
                            </Auth>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/confirm" element={<ConfirmEmail />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
