import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ExplorePage from "../pages/ExplorePage";
import ReelsPage from "../pages/ReelsPage";
import MessagesPage from "../pages/MessagesPage";
import BaseLayout from "../components/BaseLayout";
import ProfilePage from "../pages/ProfilePage";

interface PrivateRouteProps {
  Component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  return (
    <BaseLayout>
      <Component />
    </BaseLayout>
  );
};

const Router: React.FC = () => {
  const privateRoutes: { path: string; Component: React.ComponentType }[] = [
    { path: "/explore", Component: ExplorePage },
    { path: "/reels", Component: ReelsPage },
    { path: "/messages", Component: MessagesPage },
    { path: "/profile", Component: ProfilePage },
    { path: "/main", Component: MainPage },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {privateRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute Component={Component} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
