import React, { Component, useContext } from 'react'
import User from "./User";
import Loading from "./loading";
import GithubContext from "../context/context";


export const Users = () => {

  const githubcontext = useContext(GithubContext)
  const {users,loading} = githubcontext

  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="container mt-3">
        <div className="row">{users.map(user => {
          return <User key={user.id} user={user} />
        })}</div>
      </div>
    )
  }
}

export default Users
