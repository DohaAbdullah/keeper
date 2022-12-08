import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import MainPage from "../pages/mainPage";
import HelloUser from "../pages/helloUser";


function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hello" element={<HelloUser />} />
    </Routes>
  );
}

export default AppRoutes;
