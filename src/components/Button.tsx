type ButtonTypes = 'primary' | 'secondary' | 'danger'
interface Props {
    title: string
    icon?: JSX.Element
    onClick?: () => void
    type: ButtonTypes
    loading?: boolean
    outline?: boolean
    buttonType?: 'button' | 'submit'
}

const BASE_STYLES =
    'inline-flex items-center rounded-md px-4 py-2 disabled:opacity-75 disabled:cursor-not-allowed'

const generateTypeClass = (type: ButtonTypes) => {
    switch (type) {
        case 'primary': {
            return 'bg-blue-500 hover:bg-blue-600 text-white'
        }
        case 'secondary': {
            return 'bg-gray-300 hover:bg-gray-400 text-gray-900'
        }
        case 'danger': {
            return 'bg-red-500 hover:bg-red-600 text-red-50'
        }
    }
}

export const Button = ({
    title,
    icon,
    onClick,
    type,
    loading,
    outline,
    buttonType = 'button',
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${BASE_STYLES} ${generateTypeClass(type)}`}
            disabled={loading}
            type={buttonType}
        >
            {loading && (
                <span>
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </span>
            )}
            <span className={`font-medium`}>{title}</span>
        </button>
    )
}
