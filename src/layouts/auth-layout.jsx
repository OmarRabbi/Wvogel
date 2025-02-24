import Navbar from "@/components/shared/navbar";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
