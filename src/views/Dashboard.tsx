import { PlusIcon, CurrencyDollarIcon, CogIcon, SupportIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto my-24">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-3xl font-semibold mb-5">My Websites</h2>
                    <button>
                        <PlusIcon className="h-8 w-8 p-1 rounded-md bg-gray-300" />
                    </button>
                </div>

                <div className="grid grid-flow-row gap-5 grid-cols-9 mb-24">
                    <div className="col-span-3">
                        <Link to={`/sites/webshape.dev`}>
                            <img
                                className="h-36 w-full object-cover rounded-md bg-gray-200 transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer"
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
                            />
                            <div className="mt-4 font-semibold leading-tight">WebShape</div>
                            <span className="text-gray-600 text-sm">https://webshape.dev</span>
                        </Link>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold mb-5">Account</h2>
                <div className="grid grid-flow-row gap-5 grid-cols-9 mb-24">
                    <div className="col-span-3">
                        <Link to={`/settings`}>
                            <div className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer">
                                <div className="flex flex-col h-full items-center justify-center">
                                    <CogIcon className="h-5 w-5 text-gray-600" />
                                    <span className="text-gray-600">Settings</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-3">
                        <Link to={`/billing`}>
                            <div className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer">
                                <div className="flex flex-col h-full items-center justify-center">
                                    <CurrencyDollarIcon className="h-5 w-5 text-gray-600" />
                                    <span className="text-gray-600">Billing</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-3">
                        <Link to={`/help`}>
                            <div className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer">
                                <div className="flex flex-col h-full items-center justify-center">
                                    <SupportIcon className="h-5 w-5 text-gray-600" />
                                    <span className="text-gray-600">Help & Support</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
