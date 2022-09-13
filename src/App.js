import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="students/:studentID" element={<StudentProfile />} />
      </Routes>
    </div>
  );
}

export default App;
