import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";
import TodoPage from "../pages/TodoPage";
const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
