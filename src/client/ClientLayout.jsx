import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
