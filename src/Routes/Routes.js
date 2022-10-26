import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tech-edu-server.vercel.app')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tech-edu-server.vercel.app')
            }

        ]
    }
]);