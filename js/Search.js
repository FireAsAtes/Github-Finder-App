import React, { useContext, useState } from 'react'
import GithubContext from "../context/context";
import Users from './Users';


const Search = ({ showAlert }) => {
   const githubContext = useContext(GithubContext)
   const [keyword, useKeyword] = useState("");

   const onFormSubmit = (e) => {
      e.preventDefault();
      if (keyword === "") {
         showAlert("You need a keyword to search", "danger")
      } else if (e.target.elements.txtItem.value === "") {
         alert("Please write a keyword")
      }
      else {
         e.target.elements.txtItem.value = ""
         githubContext.SearchUsers(keyword)
      }
   }
   const OnChange = (e) => {
      useKeyword(e.target.value)
   }


   return (
      <div className="container my-3">
         <form onSubmit={onFormSubmit}>
            <div className="input-group">
               <input type="text" name="txtItem" className="form-control" onChange={OnChange} placeholder="search" />
               <div className="input-group-append">
                  {keyword.length > 0 && <button type="submit" className="my-1 btn btn-sm btn-primary">Search</button>}
               </div>
               {
               githubContext.users.length>0 && <div onClick={githubContext.ClearResult} className="btn my-2 btn-secondary btn-sm btn-block">Clear Results</div>
               }
            </div>
            <div className="alert alert-warning d-none"></div>
         </form>
      </div>
   )

}

export default Search
