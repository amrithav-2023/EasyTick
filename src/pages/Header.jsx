import React from 'react'
import icon from '../icons/icon.png'

function Header() {
  return (
    <>
       <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
     <div class="container-fluid">
    <a class="navbar-brand"  href="#"> <img style={{width:'40px'}} src={icon}></img>Easy Tick</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      
  </div>
</nav>
    </>
    
  )
}

export default Header