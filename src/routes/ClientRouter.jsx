import React from "react";
import { Route } from "react-router-dom";
import ClientLayout from "../client/ClientLayout";
import Home from "../client/Home/Home";
import LifeAtCorpseed from "../client/life-at-corpseed/Lifeatcorpseed";
import ContactUs from "../client/contact-us/ContactUs";
import AboutUs from "../client/about-us/AboutUs";
import ERPForPlasticWasteManagement from "../client/epr-for-plastic-waste-management/EPRForPlasticWasteManagement"
import JoinOurTeam from "../client/join-our-team/JoinOurTeam";

const ClientRouter = () => {
  return (
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="life-at-corpseed" element={<LifeAtCorpseed />} />
        <Route path="epr-for-plastic-waste-management" element={<ERPForPlasticWasteManagement />} />
        <Route path="join-our-team" element={<JoinOurTeam/>}/>
      </Route>
    </>
  );
};

export default ClientRouter;
