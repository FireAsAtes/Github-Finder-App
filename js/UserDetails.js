import React, { useContext, useEffect } from 'react'
import Loading from './loading';
import GithubContext from "../context/context";

const UserDetails= (props)=>{
   // componentDidMount() {
   //    this.props.getUser(this.props.match.params.login)
      
   // }
   
   useEffect(()=>{
      githubContext.getUser(props.match.params.login)
   },[])
      const githubContext = useContext(GithubContext);
      const { name, avatar_url, location, html_url, bio, blog, followers, following, public_repos } = githubContext.user

      if (githubContext.loading) return <Loading />
      return (
         <div className="container mt-2">
            <div className="row">
               <div className="col-md-4">
                  <div className="card">
                     <img src={avatar_url}  className="card-image" />
                     <div className="card-body">
                        <p><i className="fas fa-map-marker-alt"></i>  {location}</p>
                        <h3 className="card-text">{name}</h3>
                        <a target='__blank' className="btn btn-primary btn-sm btn-block" href={html_url}>Go Profile</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="card">
                     <div className="card-body">
                        {bio &&
                           <>
                              <h3>About : </h3>
                              <p className="card-text">{bio}</p>
                           </>
                        }
                        {
                           blog &&
                           <>
                              <h3>Blog : </h3>
                              <p className="card-text">{blog}</p>
                           </>
                        }
                        <div>
                           <span className="badge badge-primary m-1">Followers : {followers}</span>
                           <span className="badge badge-warning m-1">Following : {following}</span>
                           <span className="badge badge-secondary m-1">Repos : {public_repos}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }


export default UserDetails
