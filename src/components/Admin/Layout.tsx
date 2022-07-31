import { Authenticated } from '../Authenticated'
import { Outlet } from 'react-router-dom'
import { SideNavigation } from './SideNavigation'

export const AdminLayout = () => {
    return (
        <Authenticated>
            <div className="max-w-6xl mx-auto">
                <div className="relative z-20 flex flex-row">
                    <SideNavigation />
                    <div className="flex-1 ml-48">
                        <main className="relative z-20 px-5 my-12 max-w-4xl mx-auto space-y-5">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
