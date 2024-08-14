import Navbar from "./components/Navbar";
import Home from "./screens/Home";

import UserRegisterForm from "./screens/Register";
import UserLogInForm from "./screens/LogIn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/login" element={<UserLogInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
