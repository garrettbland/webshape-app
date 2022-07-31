import { Button } from '../components/Button'
import { Card } from '../components/Card'

export const SiteSettings = () => {
    return (
        <>
            <h2 className="text-3xl font-semibold">Site Settings</h2>
            <Card
                title="Domain"
                description="Create or update your free webshape domain, or use a custom domain name of your own."
            >
                <>
                    <input
                        className="w-full px-3 py-2 border bg-gray-100 rounded-md mb-5"
                        placeholder="tomsproduce.webshape.dev"
                    />
                    <Button title="Save" type="primary" />
                </>
            </Card>
            <Card
                title="Title and Description"
                description="This is your websites page title. It is very important for users looking for your business. Try to keep your title under 50 characters."
            >
                <>
                    <input
                        className="w-full px-3 py-2 border bg-gray-100 rounded-md mb-5"
                        placeholder="Toms Produce | Locally sourced veggies"
                    />
                    <textarea
                        className="w-full px-3 py-2 border bg-gray-100 rounded-md"
                        placeholder="Organic vegetables delivered to your door. 100% locally owned and operated in Austin, Texas. Free shipping on orders over $50."
                        rows={5}
                    ></textarea>
                    <Button title="Save" type="primary" />
                </>
            </Card>

            <Card
                title="Header Code"
                description={`Things like a Facebook pixel and Google Analytics will go here.`}
            >
                <pre>
                    <code>
                        <textarea
                            rows={8}
                            className="bg-gray-900 font-mono text-blue-50 rounded-md w-full p-3"
                            placeholder={`<script src="https://example.com/script.js"></script>`}
                        ></textarea>
                    </code>
                </pre>
            </Card>
        </>
    )
}
