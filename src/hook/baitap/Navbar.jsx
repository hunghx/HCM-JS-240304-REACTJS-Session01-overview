import React, { useState } from 'react'
import { Home } from '../../components/Home';
import Category from '../../components/Category';
import About from '../../components/About';
import Profile from '../../components/Profile';

export default function Navbar() {
    const [page, setPage] = useState("Home");
  return (
    <div>
      <button  onClick={()=>setPage("Home")}>Home</button>
      <button  onClick={()=>setPage("Category")}>Category</button>
      <button  onClick={()=>setPage("About")}>About</button>
      <button  onClick={()=>setPage("Profile")}>My Profile</button>
    {page==="Home" && <Home/>}
    {page==="Category" && <Category/>}
    {page==="About" && <About/>}
    {page==="Profile" && <Profile/>}

    </div>
  )
}
