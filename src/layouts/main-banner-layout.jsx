import Banner from "@/components/main/banner";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

const MainBannerLayout = () => {
  const location = useLocation();

  let bannerText = "Default Banner Text";
  switch (location.pathname) {
    case "/about":
      bannerText = "About Us";
      break;
    case "/contact":
      bannerText = "Contact Us";
      break;
    case "/beastmodestore":
      bannerText = "Store";
      break;
    case "/winphoto":
      bannerText = "Win Photo";
      break;
    default:
      bannerText = "Welcome";
  }

  return (
    <>
      <div>
        <Navbar />
        {location.pathname !== "/" && <Banner bannertext={bannerText} />}
        <main className="pb-20 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainBannerLayout;
