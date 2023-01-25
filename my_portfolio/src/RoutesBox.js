import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Components/Layout";
import MyInfo from "./Pages/MyInfo";
import WorkProject from "./Pages/WorkProject";
import PersonalProject from "./Pages/PersonalProject";
import Studied from "./Pages/Studied";

function RoutesBox() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/my_info" element={<MyInfo />} />
        <Route path="/project/work" element={<WorkProject />} />
        <Route path="/project/personal" element={<PersonalProject />} />
        <Route path="/studied" element={<Studied />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default RoutesBox;
