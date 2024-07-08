import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BaseLayout from "../components/BaseLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<BaseLayout></BaseLayout>} />
        <Route path="/korean/register" element={<BaseLayout></BaseLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
