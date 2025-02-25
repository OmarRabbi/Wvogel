import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
        <main>{Outlet}</main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
