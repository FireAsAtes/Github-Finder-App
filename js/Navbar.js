import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

   return (
      <nav className=" nav navbar-expand-sm navbar-dark bg-primary">
         <div className="container">
            <Link to="/" className="navbar-brand text-center">
               <i className="fab fa-github "></i>  Github Finder
               </Link>
         </div>
         <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
               <li className="nav-item">
                  <Link to="about/aboo" className="nav-link">About</Link>
               </li>
            </ul>
         </div>

      </nav>
   )
}


export default Navbar
