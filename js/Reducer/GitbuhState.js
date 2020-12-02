import React, { useReducer } from "react";
import GithubReducer from "./reducer";
import GithubContext from "../../context/context";
import Notfoundpage from "../notfoundpage";
import axios from "axios";

const GithubState = (props) => {
   const initalState = {
      users: [],
      loading: false,
      user: {}
   }

   const SetLoader = () => {
      dispatch({ type: "SET_LOADİNG", loading: true })
   }

   const ClearResult = () => {
      dispatch({ type: "CLEAR_RESULT" })
      document.querySelector(".alert").classList.add("d-none")
   }

   const Stop_Loading = () => {
      dispatch({ type: "STOP_LOADİNG", loading: false })
   }
   
   const showAlert=(msg)=>{
      document.querySelector(".alert").innerHTML=`Sorry, We could not find profile that name is ${msg} :(`
   }

   const SearchUsers = (keyword) => {
      SetLoader()
      setTimeout(() => {
         axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
            if (res.data.items.length <= 0) {
               Stop_Loading()
               document.querySelector(".alert").classList.remove("d-none")
               showAlert(keyword)
            }
            else {
               document.querySelector(".alert").classList.add("d-none")
               dispatch({ type: "SEARCH_USERS", payload: res.data.items })
            }
         })
      }, 1030)
   }
   
   const getUser = (username) => {
      SetLoader();
      setTimeout(() => {
         axios.get(`https://api.github.com/users/${username}`).then(res => dispatch(
            {
               type: "GET_USER",
               payload: res.data
            }
         ))
      }, 1030)

   }

   const [state, dispatch] = useReducer(GithubReducer, initalState)

   return <GithubContext.Provider
      value={{
         users: state.users,
         user: state.user,
         loading: state.loading,
         SearchUsers, ClearResult, getUser
      }}>
      {props.children}
   </GithubContext.Provider>
}
export default GithubState
