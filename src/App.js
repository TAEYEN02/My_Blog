import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import SignUp from './pages/signup';
import Forgot from './pages/forgot';
import { AuthProvider } from "./context/AuthContext";
import MainPage from './pages/mainpage';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
