import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import MainPage from "../pages/mainPage";
import HelloUser from "../pages/helloUser";
import ToDoList from "../pages/toDoList";
import ToDoListV2 from "../pages/todolistv2";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hello" element={<HelloUser />} />
      <Route path="/todolist" element={<ToDoList />} />
      <Route path="/list" element={<ToDoListV2 />} />
    </Routes>
  );
}

export default AppRoutes;
