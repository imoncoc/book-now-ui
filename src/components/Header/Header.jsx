import React, { useContext } from 'react';
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire("Success!", "Successfully Logout!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };



     return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3">
           <Link to="/" className="navbar-brand">
             <h3>Book Now</h3>
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#myNavbar"
           >
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="myNavbar">
             <ul className="navbar-nav mx-auto">
               <li className="nav-item">
                 <NavLink
                   to="/"
                   className={({ isActive }) =>
                     isActive ? "nav-link active" : "nav-link default"
                   }
                 >
                   Home
                 </NavLink>
               </li>
               {!user && (
                 <li className="nav-item">
                   <NavLink
                     to="/login"
                     className={({ isActive }) =>
                       isActive ? "nav-link active" : "nav-link default"
                     }
                   >
                     Login
                   </NavLink>
                 </li>
               )}
               <li className="nav-item">
                 <NavLink
                   to="/confirmBooking"
                   className={({ isActive }) =>
                     isActive ? "nav-link active" : "nav-link default"
                   }
                 >
                   Confirm Booking
                 </NavLink>
               </li>
             </ul>
             <div className="d-flex d-lg-flex align-items-baseline justify-content-between">
               <p className="text-white me-4">
                 <span className="me-2 phone-icon">
                   <FontAwesomeIcon icon={faUser} />
                 </span>
                 {user ? user?.email : "No User"}
               </p>

               {user ? (
                 <button className="btn btn-danger" onClick={handleLogout}>
                   Logout
                 </button>
               ) : (
                 <Link to="/login">
                   <button className="btn btn-primary">Login</button>
                 </Link>
               )}
             </div>
           </div>
         </nav>
       </div>
     );
};

export default Header;