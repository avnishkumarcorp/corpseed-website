import React from "react";
import { Route } from "react-router-dom";
import ClientLayout from "../client/ClientLayout";
import Home from "../client/Home/Home";
import LifeAtCorpseed from "../client/life-at-corpseed/Lifeatcorpseed";
import ContactUs from "../client/contact-us/ContactUs";
import AboutUs from "../client/about-us/AboutUs";

const ClientRouter = () => {
  return (
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="life-at-corpseed" element={<LifeAtCorpseed />} />
      </Route>
    </>
  );
};

export default ClientRouter;
