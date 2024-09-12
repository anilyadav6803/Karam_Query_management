import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './mainapp/Home';
import About from './mainapp/About';
import Registration from './mainapp/Registration';
import Login from './mainapp/Login';
import Adlogin from './mainapp/Adlogin';
import Dash from './userapp/Dash';
import AddQuery from './userapp/AddQuery';
import ViewPenQuery from './userapp/ViewPenQuery.jsx';
import EditUser from './userapp/EditUser.jsx';
import Addash from './adminapp/Addash.jsx'; // Correct case
import Viewalluser from './adminapp/Viewalluser.jsx';
import ViewallPenQuery from './adminapp/Viewallpenquery.jsx';
import Viewallcomquery from './adminapp/Viewallcomquery.jsx';
import Viewallproquery from './adminapp/Viewallproquery.jsx';
import ViewProQuery from './userapp/Viewproquery.jsx';
import Viewcomquery from './userapp/Viewcomquery.jsx';
import Services from './mainapp/Services.jsx';
import Careers from './mainapp/Careers.jsx';
import Contact from './mainapp/Contact.jsx';

function App() {
  return (
    <>
    <div className='container-fluid'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adlogin' element={<Adlogin />} />
      <Route path='/userdash/:id' element={<Dash />} />
      <Route path='/addquery/:id' element={<AddQuery/>} />
      <Route path='/viewPenquery/:id' element={<ViewPenQuery/>} />
      <Route path="/edituser/:id" element={<EditUser />} /> 
      <Route path="/addash" element={<Addash />} />
        <Route path="/viewalluser" element={<Viewalluser />} />
        <Route path="/viewallpenquery" element={<ViewallPenQuery />} />
        <Route path="/viewallcomquery" element={<Viewallcomquery />} />
        <Route path="/viewallproquery" element={<Viewallproquery />} />
        <Route path="/viewproquery/:id" element={<ViewProQuery />} />
        <Route path="/viewcomquery/:id" element={<Viewcomquery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
