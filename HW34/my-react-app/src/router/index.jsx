import MainLayout from '@/components/layouts/mainLayout';
import HomePage from '@/pages/home';
import HotelsListPage from '@/pages/hotelsList';
import HotelDetailsPage from '@/pages/hotelDetails';
import AboutPage from '@/pages/about';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = ()=>{
  return(
     <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="hotels" element={<HotelsListPage />}/>
      <Route path="hotels/:id" element={<HotelDetailsPage />}/>
      <Route path="about" element={<AboutPage />}/>
    </Route>
  </Routes>
  )
 
};

export default AppRoutes;
