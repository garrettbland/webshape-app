import { Outlet, Link } from 'react-router-dom'
import { Authenticated } from '../Authenticated'

export const EditorLayout = () => {
    return (
        <Authenticated>
            <>
                <div>
                    Editor navbar...<Link to={'/dashboard'}>Dashboard</Link>
                </div>
                <Outlet />
            </>
        </Authenticated>
    )
}
