import SignIn from "@/pages/auth/sign-in";
import Home from "@/pages/main/home";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/main-layout";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { 
        path: "", 
        element: <h1>Dashboard</h1>,
      },
    ],
  },
    {
        path: '/',
        element: <MainLayout/>,
        children: [
          {
            index: true,
            element: <Home/>,
          },

        ]
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
    }
])
