import LoginPage from "./component/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddItem from "./component/additem/AddItem.jsx";
import Display from "./component/additem/Display.jsx";

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

