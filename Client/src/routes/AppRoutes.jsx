import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Home, About, NotFound, Landing } from '../pages';

// Define your routes configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            // Public Routes - No authentication required
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },

        ],
    },



    // 404 Not Found - Catch all unmatched routes
    {
        path: '*',
        // element: <NotFound />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;

