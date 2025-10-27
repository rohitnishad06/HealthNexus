import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AdlogIn from './pages/AdlogIn';
import AdminDash from './admin/AdminDash';
import Adddoctor from './admin/Adddoctor';
import Addnews from './admin/Addnews';
import Addpatient from './admin/Addpatient';
import Viewappointment from './admin/Viewappointment';
import ViewDoctor from './admin/ViewDoctor';
import Viewfeedback from './admin/Viewfeedback';
import Viewpatient from './admin/Viewpatient';
import EditDoc from './pages/EditDoc';
import Reg from './pages/Reg';
import Login from './pages/Login';
import Ddash from './doctor/Ddash';
import Pdash from './patient/Pdash';
import Pappointment from './patient/Pappointment';
import Preqapp from './patient/Preqapp';
import Dappointment from './doctor/Dappointment';
import Dconapp from './doctor/Dconapp';
import Dcanapp from './doctor/Dcanapp';
import Dcomapp from './doctor/Dcomapp';
import Pfeed from './patient/Pfeed';
import Pviewfeed from './patient/Pviewfeed';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='containe-fluid'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdlogIn/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/ddash' element={<Ddash/>}/>
        <Route path='/penapp' element={<Dappointment/>}/>
        <Route path='/dconapp' element={<Dconapp/>}/>
        <Route path='/dcanapp' element={<Dcanapp/>}/>
        <Route path='/dcomapp' element={<Dcomapp/>}/>
        <Route path='/pdash' element={<Pdash/>}/>
        <Route path='/papp' element={<Pappointment/>}/>
        <Route path='/preqapp' element={<Preqapp/>}/>
        <Route path='/pfeed' element={<Pfeed/>}/>
        <Route path='/pviewfeed' element={<Pviewfeed/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admindash' element={<AdminDash/>}/>
        <Route path='/adddoctor' element={<Adddoctor/>}/>
        <Route path='/addnews' element={<Addnews/>}/>
        <Route path='/addpatient' element={<Addpatient/>}/>
        <Route path='/viewappointment' element={<Viewappointment/>}/>
        <Route path='/viewDoctor' element={<ViewDoctor/>}/>
        <Route path='/viewfeedback' element={<Viewfeedback/>}/>
        <Route path='/viewpatient' element={<Viewpatient/>}/>
        <Route path='/viewDoctor/edit' element={<EditDoc/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;