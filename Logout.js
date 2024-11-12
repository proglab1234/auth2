import React from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate= useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active"  onClick={() => navigate('/')}>Home</a>
              <a className="nav-link"  onClick={() => navigate('/profile')}>Profile</a>
              <a className="nav-link"  onClick={() => navigate('/login')}>Login</a>
              <a className="nav-link"  onClick={() => navigate('/signup')}>Signup</a>
            </div>
          </div>
        </div>
      </nav>
      <h1>logout</h1>
    </div>
  )
}

export default Logout
