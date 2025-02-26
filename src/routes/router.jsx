import SignIn from "@/pages/auth/sign-in";
import Home from "@/pages/main/home";
import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "@/layouts/dashboard-layout";

import Profile from "@/pages/dashboard/profile";
import Chat from "@/pages/dashboard/chat";
import Notification from "@/pages/dashboard/notification";
import ProfileInformation from "@/pages/dashboard/profileInformation";
import AuthLayout from "@/layouts/auth-layout";
import SignUp from "@/pages/auth/sign-up";
import MainBannerLayout from "@/layouts/main-banner-layout";
import Contact from "@/pages/main/contact";
import Beastmode from "@/pages/main/beastmode";
import Winphoto from "@/pages/main/winphoto";
import Horses from "@/pages/main/horses";
import Aboutus from "@/pages/main/aboutus";
import Partnership from "@/pages/main/partnership";

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
        element: <Navigate to="/dashboard/profile" />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit-profile",
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
    element: <MainBannerLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "beastmodestore",
        element: <Beastmode />,
      },
      {
        path: "winphoto",
        element: <Winphoto />,
      },
      {
        path: "horses",
        element: <Horses />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "ownerandpartnership",
        element: <Partnership />,
      },
    ],
  },
]);
