import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Routes.css';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Header from 'components/common/Header';

function AppRoutes() {
  return (
    <BrowserRouter>
     < Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='*' element={< NotFound />} />
      </Routes>
  </BrowserRouter>
  );
}

export default AppRoutes;
