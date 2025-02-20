import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Routes.css';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import DefaultPage from 'components/common/DefaultPage';

function AppRoutes() {
  return (
    <BrowserRouter>
     < Header />
      <Routes>
        <Route  path='/' element={<DefaultPage />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Route>
        <Route path='*' element={< NotFound />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default AppRoutes;
