import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/Register/ForgotPassword';
import ResetPassword from './Components/Register/ResetPassword';
import About from './Components/About/About';
import PaymentSucess from './Components/Payments/PaymentSucess';
import PaymentFail from './Components/Payments/PaymentFail';
import Subscription from './Components/Payments/Subscription';
import Course from './Components/Courses/Course';
import Profile from './Components/Profile/Profile';
import UpdateProfile from './Components/Profile/UpdateProfile';
import ChangePassword from './Components/Profile/ChangePassword';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/course' element={<Course/>} />


        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/updateprofile' element={<UpdateProfile/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />


        <Route path='/register' element={<Register/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/resetPassword:token' element={<ResetPassword/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/paymentsucess' element={<PaymentSucess/>} />
        <Route path='/paymentfail' element={<PaymentFail/>} />
        <Route path='/subscription' element={<Subscription/>} />


      </Routes>
   <Footer/>
</Router>
  )
}

export default App