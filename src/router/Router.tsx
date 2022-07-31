import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import { AdminLayout } from '../components/Admin/Layout'
import { EditorLayout } from '../components/Editor/Layout'
import { ScrollToTop } from '../components/ScrollToTop'

import { Dashboard } from '../views/Dashboard'
import { Billing } from '../views/Billing'
import { Site } from '../views/Site'
import { Editor } from '../views/Editor'
import { SiteSettings } from '../views/SiteSettings'
import { Analytics } from '../views/Analytics'

import { Login } from '../views/Login'
import { Signup } from '../views/Signup'
import { ConfirmEmail } from '../views/ConfirmEmail'
import { Settings } from '../views/Settings'
import { Help } from '../views/Help'
import { Layout } from '../components/Layout'

export const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/sites/:id" element={<Site />} />
                        <Route path="/sites/:id/edit" element={<Editor />} />
                        <Route path="/sites/:id/settings" element={<SiteSettings />} />
                        <Route path="/sites/:id/analytics" element={<Analytics />} />
                        <Route path="/billing" element={<Billing />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/help" element={<Help />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/confirm" element={<ConfirmEmail />} />
                    <Route path="*" element={<div>not found...</div>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
