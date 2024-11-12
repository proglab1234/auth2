import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
      setUser(response.data);
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

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
      <h2>Profile</h2>
      <button onClick={fetchProfile}>Load Profile</button>
      {user && (
        <div >
          <p style={{border:'solid black'}}><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
