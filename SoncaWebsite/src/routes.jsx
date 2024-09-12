import { createBrowserRouter, Outlet } from 'react-router-dom'
import App from './App.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <h1>something</h1>
            }
        ]

    }
])

export default router;