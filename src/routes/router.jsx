import SignIn from "@/pages/auth/sign-in";
import Home from "@/pages/main/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
    }
])