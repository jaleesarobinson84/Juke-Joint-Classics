import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg justify-content-center">
  <div className="container-fluid">
    <Link to='/'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Home</span>
    </button>
    </Link>
    {/* <a className="navbar-brand justify-content-center" href="#">Menu</a> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/entrees' aria-current="true">Entrees</Link>
        </li>
        <li className="nav-item">
          <Link to='/desserts' aria-current="true">Desserts</Link>
        </li>
        
        <li className="nav-item">
          <Link to='/meals' aria-current="true">Meals</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button type="button" className="btn btn-warning">Enter</button>
      </form>
    </div>
  </div>
</nav>
  </div>
  )
}
export default Navbar
