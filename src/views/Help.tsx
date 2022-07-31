import { Button } from '../components/Button'
import { Card } from '../components/Card'

export const Help = () => {
    return (
        <>
            <h2 className="text-3xl font-semibold mb-5">Help & Support</h2>
            <Card
                title="Contact Us"
                description="Reach out to us at anytime. Please fill out the form below, and we will be in touch as soon as possible."
            >
                <div className="flex flex-col">
                    <textarea
                        rows={5}
                        className="bg-gray-100 rounded-md mb-5 p-5"
                        placeholder="Your message here"
                    ></textarea>
                    <div className="flex justify-end">
                        <Button title="Submit" type="secondary" />
                    </div>
                </div>
            </Card>
        </>
    )
}
