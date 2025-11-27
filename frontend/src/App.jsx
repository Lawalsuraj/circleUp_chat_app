import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import AuthLayout from "./layouts/Auth.layout"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProfilePage from "./pages/Profile";

import './App.css'
import { useEffect } from "react";
import { useAuthStore } from "./store/AuthStore";
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";

function App() {

 
  const user = useAuthStore((state) => state.user);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
      checkAuth();
  }, []); 

  useEffect(() => {
      console.log("User from Zustand:", user);
  }, [user]); 


  return (
    <Router>
      <Routes>
      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register/>} />
      </Route>

      {/* Main app pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create/post" element={<CreatePost/>}/>
    
      </Route>
    </Routes>

    </Router>
  );
}

export default App;
