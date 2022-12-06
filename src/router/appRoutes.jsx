import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import MainPage from "../pages/mainPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
