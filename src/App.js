import './App.css';
import { Nav } from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import { Volunteer } from './components/Volunteer';
import { Aboutus } from './components/Aboutus';
import { Donor } from './components/Donor';
import { Events } from './components/Events';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path='' element={<Donor/>} />
          <Route path='about' element={<Aboutus />} />
          <Route path='volunteer' element={<Volunteer />} />
          <Route path='donor' element={<Donor />} />
          <Route path='events' element={<Events />} />
          <Route path='faqs' element={<FAQ />} />
        </Routes>
    </div>
  );
}

export default App;
