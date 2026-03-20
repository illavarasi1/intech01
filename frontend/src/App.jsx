import LoginPage from "./component/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import AddItem from "./component/additem/AddItem.jsx";
import Display from "./component/additem/Display.jsx";
// import Header from "./component/header/Header";
// import Sidebar from "./component/sidebar/Sidebar";
// import AddProduct from "./component/additem/AddProduct";

import ProtectedRoute from "./component/ProtectedRoute.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/additem"
          element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          }
        />

        <Route
          path="/display"
          element={
            <ProtectedRoute>
              <Display />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
     

 
}

export default App;

