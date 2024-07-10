import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ExplorePage from "../pages/ExplorePage";
import ReelsPage from "../pages/ReelsPage";
import MessagesPage from "../pages/MessagesPage";
import BaseLayout from "../components/BaseLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <BaseLayout>
              <MainPage />
            </BaseLayout>
          }
        />
        <Route
          path="/explore"
          element={
            <BaseLayout>
              <ExplorePage />
            </BaseLayout>
          }
        />
        <Route
          path="/reels"
          element={
            <BaseLayout>
              <ReelsPage />
            </BaseLayout>
          }
        />
        <Route
          path="/messages"
          element={
            <BaseLayout>
              <MessagesPage />
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
