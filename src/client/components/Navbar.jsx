import React from 'react'

function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg jsutify-content-center">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand justify-content-center" href="#">Menu</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link" aria-current="true" href="#">Entrees</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" aria-current="true" href="#">Desserts</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" aria-current="true" href="#">Meals</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button type="button" class="btn btn-warning">Enter</button>
      </form>
    </div>
  </div>
</nav>
  </div>
  )
}

export default Navbar
