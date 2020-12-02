import React, { useState, Fragment } from 'react'
import { BrowserRouter,  Route, Switch, Link, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from './Navbar'
import About from "./About";
import Home from "./Home";
import notfoundpage from "./notfoundpage";
import UserDetails from './UserDetails';
import GithubState from './Reducer/GitbuhState';



export const Main = () => {

   return (
      <GithubState>
         <BrowserRouter>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/about/aboo" component={About} />
               <Route path="/user/:login" component={UserDetails}/>
               <Route component={notfoundpage}/>
            </Switch>
         </BrowserRouter>
      </GithubState>
   )

}

export default Main

