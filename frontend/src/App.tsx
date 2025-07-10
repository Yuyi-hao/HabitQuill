import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from './pages/404Page/NotFoundPage';
import HomePage from './pages/home/HomePage';
import AuthProvider from './provider/AuthProvider';
import LoginDialog from './components/dialogs/Logindailog';
import AuthDialogWrapper from './provider/AuthDIalogTrigger';

function LogoutUser(){
  localStorage.clear()
  return <Navigate to="/accounts/login"/>
}

function App() {
  return (
    <>
     <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
