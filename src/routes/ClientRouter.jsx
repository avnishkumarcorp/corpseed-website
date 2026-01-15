import React from "react";
import { Route } from "react-router-dom";
import ClientLayout from "../client/ClientLayout";
import Home from "../client/home/Home";
import LifeAtCorpseed from "../client/life-at-corpseed/Lifeatcorpseed";
import ContactUs from "../client/contact-us/ContactUs";
import AboutUs from "../client/about-us/AboutUs";
import ERPForPlasticWasteManagement from "../client/epr-for-plastic-waste-management/EPRForPlasticWasteManagement"
import JoinOurTeam from "../client/join-our-team/JoinOurTeam";
import IndustriesSolution from "../client/IndustriesSolutions/IndustriesSolution";
import AutoMobile2 from "../client/IndustriesSolutions/AutoMobile2";

const ClientRouter = () => {
  return (
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="life-at-corpseed" element={<LifeAtCorpseed />} />
        <Route path="epr-for-plastic-waste-management" element={<ERPForPlasticWasteManagement />} />
        <Route path="industry-solution" element={<IndustriesSolution type="industries"/>}/>
        <Route path="/automobile" element={<AutoMobile2 type="Automobile" />} />
        <Route path="join-our-team" element={<JoinOurTeam/>}/>
        <Route path="partner"/>
      </Route>
    </>
  ); 
};

export default ClientRouter;
