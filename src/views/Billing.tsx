import { CheckIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

export const Billing = () => {
    return (
        <>
            {/* <div className="py-3 px-5 flex flex-row justify-between items-center border-b">
                <div className="max-w-3xl mx-auto w-full flex flex-row justify-between">
                    <Link to={`/`} className="hover:underline">
                        WebShape
                    </Link>
                    <button>Logout</button>
                </div>
            </div>
            <div className="py-1">
                <div className="max-w-3xl mx-auto w-full">
                    <Link to={`/`} className="text-sm hover:underline">
                        Home
                    </Link>
                    <span className="mx-3 text-gray-400">/</span>
                    <Link to={`/billing`} className="text-sm hover:underline">
                        Billing
                    </Link>
                </div>
            </div> */}
            {/* <div className="max-w-3xl mx-auto my-24 space-y-5"> */}
            <h2 className="text-3xl font-semibold mb-5">Billing</h2>
            <Card
                title="Plan Details"
                description="Manage your current website plan. You will be prompted to confirm before changing plans."
            >
                <>
                    <div className="grid grid-flow-row grid-cols-6 gap-5">
                        <div className="flex flex-row items-center justify-between col-span-3 rounded-md border-2 border-green-500 p-5">
                            <div>Individual</div>
                            <div className="border-2 border-green-100 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                                <CheckIcon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between col-span-3 rounded-md border-2 border-gray-300 p-5">
                            <div>Unlimited</div>
                            <div className="border-2 border-gray-300 w-8 h-8 rounded-full flex items-center justify-center"></div>
                        </div>
                    </div>
                    <Link to="#">
                        <div className="mt-5 text-gray-900 text-sm hover:underline">
                            View All Plan Details
                        </div>
                    </Link>
                </>
            </Card>
            <Card title="Payment Details" description="View or manage your payment details">
                <div>Test</div>
            </Card>
            <Card title="Transactions" description="">
                <div>Test</div>
            </Card>
            {/* </div> */}
        </>
    )
}
