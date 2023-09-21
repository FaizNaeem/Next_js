import React from 'react'

export const Navbar = ({faiz}) => {
  return (
    <div className='sticky-top'>
        <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1" ><h3 style={{color:"white"}}>{faiz}</h3></span>
    </div>
  </nav></div>
  )
}
