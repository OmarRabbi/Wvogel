import DashboardLayout from "@/layouts/dashboard-layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <h1>Dashboard</h1> }],
  },
]);
