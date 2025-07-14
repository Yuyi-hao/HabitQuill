import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from './pages/404Page/NotFoundPage';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import toast from 'react-hot-toast';
import UserProfilePage from './pages/userProfile/UserProfilePage';

const notifyLoggedOut = () => toast.success('Logged out successfully')


const LogoutUser = () => {
  localStorage.clear();
  notifyLoggedOut();
  return <><Navigate to={"/"}/></>
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/logout' element={<LogoutUser/>}/>
        <Route path='accounts/profile' element={<UserProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
