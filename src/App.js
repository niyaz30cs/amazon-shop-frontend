import React, { useEffect, useState } from 'react'
import "./App.css";
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
// import MianCompo from './components/Home/MainCompo';
// import Footer2 from './components/FooterCompo/Footer2';
import { Route, Routes } from 'react-router-dom';
import MainCompo from './components/Home/MainCompo';
import SignIn from './components/Signup_Signin/SignIn';
import SignUp from './components/Signup_Signin/SignUp';
import Cart from './components/CartCompo/Cart';
import BuyNow from './components/BuyNowCompo/BuyNow';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './components/FooterCompo/Footer';
function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 3000)
  }, [])
  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <Newnav />
            <Routes>
              <Route path='/' element={<MainCompo />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/register' element={<SignUp />} />
              <Route path='/getproductsone/:id' element={<Cart />} />
              <Route path='/buynow' element={<BuyNow />} />
            </Routes>
            {/* <Footer2 /> */}
            <Footer/>
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
        )
      }
    </>
  )
}

export default App
