import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import SignUp from './pages/signup';
import Forgot from './pages/forgot';
import { AuthProvider } from "./context/AuthContext";
import MainPage from './pages/mainpage';
import Myposts from './pages/Myposts';
import Write from './pages/Write';
import Profile from './pages/profile';
import PopularPage from './pages/popularPage';
import AllPage from './pages/AllPage';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/mypage" element={<MainPage/>}/>
          <Route path='/myposts' element={<Myposts/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/popular' element={<PopularPage/>}/>
          <Route path='/allPage' element={<AllPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
