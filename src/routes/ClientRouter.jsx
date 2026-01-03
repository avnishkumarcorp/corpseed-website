import React from "react";
import { Route } from "react-router-dom";
import ClientLayout from "../client/ClientLayout";
import Home from "../client/Home/Home";

const ClientRouter = () => {
  return (
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  );
};

export default ClientRouter;
