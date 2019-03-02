import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">NepStay</Link>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 bwm-search" type="search" placeholder="Try 'New Baneshwor'" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search" type="submit">Search</button>
        </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link active" to="/login">Login <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
