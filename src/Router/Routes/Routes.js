import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import EditReview from "../../Pages/AllReviews/EditReview/EditReview";
import MyReviews from "../../Pages/AllReviews/MyReviews/MyReviews";
import AddService from "../../Pages/AllServices/AddService/AddService";
import ServiceDetails from "../../Pages/AllServices/ServiceDetails/ServiceDetails";
import Services from "../../Pages/AllServices/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://my-panorama.vercel.app/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://my-panorama.vercel.app/services')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://my-panorama.vercel.app/service/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/edit-review/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`https://my-panorama.vercel.app/review/${params.id}`)
            },
        ]
    }
])