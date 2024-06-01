/* eslint-disable react/prop-types */

import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import "./index.css";
import Home from "./pages/Home.jsx";
// import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import FarmersTrick from "./pages/categories/FarmersTrick";
import Subsidies from "./pages/categories/Subsidies";
import AgroMarket from "./pages/categories/AgroMarket";
import CropPage from "./pages/categories/CropPage";
import Calender from "./pages/Calender";
import LocalMarket from "./pages/agro-market/LocalMarket";
import NationalMarket from "./pages/agro-market/NationalMarket";
import SubsidyPage from "./pages/categories/SubsidyPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/farmers-trick/*",
//     element: <FarmersTrick />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/subsidies",
//     element: <Subsidies />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/agro-market",
//     element: <AgroMarket />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/farmers-trick" element={<FarmersTrick />} />
          <Route path="/farmers-trick/:crop" element={<CropPage />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/subsidies/:subsidy" element={<SubsidyPage />} />
          <Route path="/agro-market" element={<AgroMarket />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/local-market" element={<LocalMarket />} />
          <Route path="/national-market" element={<NationalMarket />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);
