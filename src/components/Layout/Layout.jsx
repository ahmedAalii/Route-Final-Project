import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>
  
  <Navbar />

  <div className="container my-5 py-12 lg:py-20">
    <Outlet />
  </div>

  <Footer/>
  
  </>
}
