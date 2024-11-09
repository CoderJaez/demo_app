import Header from "../partials/header/Header";
import Footer from "../partials/footer/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="bg-gray-500 flex flex-col h-dvh">
      <Header />
      <section className="grow bg-slate-200 ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
