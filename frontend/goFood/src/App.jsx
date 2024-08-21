import Navbar from "./components/Navbar";
import Home from "./screens/Home";

import UserRegisterForm from "./screens/Register";
import UserLogInForm from "./screens/LogIn";
import Dashboard from "./screens/Dashboard";
import AddFoodForm from "./screens/addFoodForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateFoodForm from "./screens/UpdateFoodForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/login" element={<UserLogInForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addfood" element={<AddFoodForm />} />
        <Route path="/foodupdate/:id" element={<UpdateFoodForm />} />
      </Routes>
    </Router>
  );
}

export default App;
