import SignIn from "@/pages/auth/sign-in";
import Home from "@/pages/main/home";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/main-layout";
import Profile from "@/pages/dashboard/profile";
import Chat from "@/pages/dashboard/chat";
import Notification from "@/pages/dashboard/notification";
import ProfileInformation from "@/pages/dashboard/profileInformation";
import AuthLayout from "@/layouts/auth-layout";
import SignUp from "@/pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <ProfileInformation />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
