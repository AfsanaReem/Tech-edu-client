import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login />
            }

        ]
    }
]);