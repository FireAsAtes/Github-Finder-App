import React, { Component } from 'react'
import loading from "./loading.gif";

export const Loading = () => {
  

      return (
         <React.Fragment>
            <img id="gif_id" src={`${loading} `} alt="...loading" style={{ width: "90px", color:"blue" , backgroundColor:"black", margin: "auto", display: "block", marginTop: "210px" }} />
         </React.Fragment>
      )

   }

   export default Loading
