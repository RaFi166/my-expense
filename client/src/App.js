import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./Pages/About";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginForm from "./Pages/LoginForm";
import Cookies from "js-cookie";

function App() {
  const token = Cookies.get("token");
  // const navigate = useNavigate();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              token ? <Home /> : <Navigate to="/loginForm" replace={true} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
