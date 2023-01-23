import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Components/Layout";

function RoutesBox() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default RoutesBox;
