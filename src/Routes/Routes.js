import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import Courses from "../components/Courses";
import Details from "../components/Details";
import FAQ from "../components/FAQ";
import HeaderNav from "../components/HeaderNav";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://tech-edu-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-edu-server.vercel.app/courses/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <div>
            <HeaderNav></HeaderNav>
            <img alt='Page not found' src="page404.jpg"></img>
        </div>
    }
]);