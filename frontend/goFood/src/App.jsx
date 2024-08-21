import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import UserRegisterForm from "./screens/Register";
import UserLogInForm from "./screens/LogIn";

// protected routes import
import Dashboard from "./screens/Dashboard";
import AddFoodForm from "./screens/addFoodForm";
import UpdateFoodForm from "./screens/UpdateFoodForm";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/login" element={<UserLogInForm />} />

        {/* protectedRoutes  */}
        <Route
          path="/dashboard"
          element={<ProtectedRoutes Component={Dashboard} />}
        />
        <Route
          path="/addfood"
          element={<ProtectedRoutes Component={AddFoodForm} />}
        />
        <Route
          path="/foodupdate/:id"
          element={<ProtectedRoutes Component={UpdateFoodForm} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
