import { Link, NavLink } from 'react-router-dom'
import { HomeIcon, UserCircleIcon, GlobeIcon } from '@heroicons/react/outline'

interface NavItem {
    title: string
    icon: JSX.Element
    link: `/dashboard${string}`
}

const NAV_ITEMS: NavItem[] = [
    {
        title: 'Dashboard',
        icon: <HomeIcon />,
        link: '/dashboard',
    },
    {
        title: 'Sites',
        icon: <GlobeIcon />,
        link: '/dashboard/sites',
    },
    {
        title: 'Account',
        icon: <UserCircleIcon />,
        link: '/dashboard/account',
    },
]

export const SideNavigation = () => {
    return (
        <aside className="fixed inset-0 left-[max(0px,calc(50%-45rem))] w-48 overflow-y-auto overscroll-contain border-r">
            <Link to={'/dashboard'}>
                <div className="flex flex-row items-center">
                    <img
                        src="https://via.placeholder.com/150x150.png"
                        className="h-16 w-auto p-3"
                        alt="WebShape Logo"
                    />
                    <span>WebShape</span>
                </div>
            </Link>
            <div className="mt-5">
                <div>
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            to={item.link}
                            end
                            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')}
                        >
                            <div className="flex flex-row mb-2 group">
                                <div className="w-1 sideBorder" />
                                <div className="w-6 h-6 mx-2 py-2 group-hover:text-green-500">
                                    {item.icon}
                                </div>
                                <div className="py-2 group-hover:text-green-500">{item.title}</div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </aside>
    )
}
