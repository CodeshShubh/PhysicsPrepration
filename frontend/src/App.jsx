import React, { lazy, useEffect, useState } from 'react';
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
// import Home from './components/Home/Home';
const Home = lazy(()=>import('./components/Home/Home'))
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LatestVideos from './components/LatestVideos/LatestVideos.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import FAQS from './components/FAQS/FAQS.jsx';
import NotFound from './components/Layout/NotFound';
import ProtectedRoute from './ProtectedRoute';
import  AllCourse from './components/AllCourse/AllCourse.jsx';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { clearError, clearMessage } from '../redux/Slices/userSlice';
import { loadUser } from '../redux/actions/userActions';
import Profile from './components/Profile/Profile';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Profile/ResetPassword';
import Dashboard from './components/DashBoard/Dashboard.jsx';
import Edit from './components/DashBoard/components/Edit';




const App = () => {
   const {error ,message, isAuthenticated , loading} = useSelector((state)=> state.auth);
   const dispatch = useDispatch()


  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch(clearError())
    }
    if(message){
      toast.success(message)
      dispatch(clearMessage())
    }
  }, [error ,message])

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  
  

  return (
    <>
   <BrowserRouter>
      <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={
      <ProtectedRoute isAuthenticated={!isAuthenticated} redirect={'/allCourse'} loading={loading}>
        <Login/>
      </ProtectedRoute>
    }/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/latestVideos' element={
      <ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/login'} loading={loading}>

      <LatestVideos/>
      </ProtectedRoute>

      } />
    <Route path='/allCourse' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/login'} loading={loading}>
      <AllCourse />
    </ProtectedRoute>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/'} loading={loading}>
      <Profile/>
    </ProtectedRoute>}/>
    <Route path='/faq' element={<FAQS/>}/>
    <Route path='/forgetpassword' element={<ForgetPassword/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/edit' element={<Edit/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
      <Footer/>
   </BrowserRouter>
   <Toaster position='top-center'/>
    </>
  )
}

export default App;