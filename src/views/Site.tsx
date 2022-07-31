import {
    PlusIcon,
    CurrencyDollarIcon,
    CogIcon,
    SupportIcon,
    PencilIcon,
    TrendingUpIcon,
} from '@heroicons/react/outline'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

export const Site = () => {
    return (
        <>
            <section>
                <h2 className="text-3xl font-semibold">WebShape</h2>
                <a
                    href={`https://webshape.dev`}
                    target="_blank"
                    className="hover:underline inline-block decoration-gray-700"
                >
                    <p className="text-gray-700">https://webshape.dev</p>
                </a>
            </section>
            <section className="grid grid-cols-2 gap-5">
                <Link
                    to={`/sites/webshape.dev/edit`}
                    className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer"
                >
                    <div className="flex flex-col h-full items-center justify-center">
                        <PencilIcon className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-600">Edit Content</span>
                    </div>
                </Link>
                <Link
                    to={`/sites/webshape.dev/analytics`}
                    className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer"
                >
                    <div className="flex flex-col h-full items-center justify-center">
                        <TrendingUpIcon className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-600">Analytics</span>
                    </div>
                </Link>
            </section>

            <section>
                <div className="grid grid-flow-row gap-5 grid-cols-9 mb-24">
                    <div className="col-span-3">
                        <Link to={`/sites/webshape.dev/settings`}>
                            <div className="h-36 rounded-md bg-gray-200 shadow-inner transition ring-0 hover:ring-4 hover:ring-cyan-500 cursor-pointer">
                                <div className="flex flex-col h-full items-center justify-center">
                                    <CogIcon className="h-5 w-5 text-gray-600" />
                                    <span className="text-gray-600">Site Settings</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
