import './App.css';
import { Nav } from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import { Volunteer } from './components/Volunteer';
import { Aboutus } from './components/Aboutus';
import { Donor } from './components/Donor';
import { Events } from './components/Events';
import { FAQ } from './components/FAQ';
import { Joinvolunteers } from './components/Joinvolunteers';
import { Joindonors } from './components/Joindonors';
import ScrollToTop from './components/ScrollToTop';
import { LandingPage } from './components/LandingPage';
import { Privacy } from './components/Privacy';

function App() {
  return (
    <div className="App">
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='about' element={<Aboutus />} />
          <Route path='volunteer' element={<Volunteer />} />
          <Route path='donor' element={<Donor />} />
          <Route path='events' element={<Events />} />
          <Route path='faqs' element={<FAQ />} />
          <Route path='join-volunteers' element={<Joinvolunteers />} />
          <Route path='join-donors' element={<Joindonors />} />
          <Route path='privacy' element={<Privacy />} />
        </Routes>
    </div>
  );
}

export default App;