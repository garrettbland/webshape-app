interface Props {
    title: string
    description?: string
    children?: JSX.Element
}

export const Card = ({ title, description, children }: Props) => {
    return (
        <div className="border rounded-md p-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className={`text-gray-700 ${children ? 'mb-4' : undefined}`}>{description}</p>
            {children ? children : null}
        </div>
    )
}
