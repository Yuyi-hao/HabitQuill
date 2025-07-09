import './App.css'
import {Route, Routes} from "react-router-dom";
import NotFoundPage from './pages/404Page/NotFoundPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
