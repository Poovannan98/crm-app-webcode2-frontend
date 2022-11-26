import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Home from './Components/Home';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Components/Login_Components/Main";
import Signup from "./Components/Login_Components/Signup";
import Login from "./Components/Login_Components/Login";
import EmailVerify from "./Components/Login_Components/EmailVerify";
import ForgotPassword from "./Components/Login_Components/ForgotPassword";
import PasswordReset from "./Components/Login_Components/PasswordReset";


function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
      <Route path='/home' exact element={<Home/>} />      
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
		</Routes>
    </div>
  );
}

export default App;