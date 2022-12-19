import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import MainPage from "../pages/mainPage";
import HelloUser from "../pages/helloUser";
import ToDoList from "../pages/toDoList";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hello" element={<HelloUser />} />
      <Route path="/todolist" element={<ToDoList />} />
    </Routes>
  );
}

export default AppRoutes;
