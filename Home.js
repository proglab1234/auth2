// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// function Home() {
//   const navigate = useNavigate();
//   const gotoprofile = async (e) => {
//     e.preventDefault();
//     navigate('/profile');
//   };
  
//   const gotologout = async (e) => {
//     e.preventDefault();
//     navigate('/logout');
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//               <a className="nav-link" href="#">Profile</a>
//               <a className="nav-link" href="#">Login</a>
//               <a className="nav-link" href='#'>Signup</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={gotoprofile}>profile</button>
//       <button onClick={gotologout}>Logout</button>
//     </div>
//   );
// }

// export default Home;

// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;

