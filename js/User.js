import React, { Component } from "react";
import {Link} from "react-router-dom";


const User =(props)=>{  
      const { login, avatar_url, html_url } = props.user;
      return (
         <div className="col md-4 col-sm-6 col-lg-3">
            <div className="card mt-2">
               <img src={avatar_url} className='card-img' alt="" />
               <div className="card-body">
                  <h5 className="card-title">{login}</h5>
                  <p className="card-text">Blog : {`https://${login}.com`}</p>
                  <Link to={`/user/${login}`} className=" mx-2  btn btn-primary btn-sm">Go Details</Link>
               </div>
            </div >
         </div>
      )
   }

export default User