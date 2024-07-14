import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserDetails } from "../helpers/user-details";
import authService from "../services/auth-service";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const navigate = useNavigate();
  const userDetails = getUserDetails();

  const extractBeforeAt = (email) => {
    if (!email) return ''; // Kiểm tra email có tồn tại không
    const atIndex = email.indexOf("@");
    return atIndex !== -1 ? email.substring(0, atIndex) : email;
  };

  const isAdmin = () => {
    return userDetails && userDetails.role === "ROLE_ADMIN";
  };

  const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    return !!user;
  };

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  // Kiểm tra và truy cập email từ userDetails trước khi sử dụng
  const userName = userDetails ? extractBeforeAt(userDetails.email) : '';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                List-view
              </a>
            </li>
            {isAdmin() && (
              <li className="nav-item">
                <a className="nav-link" href="/todos/create">
                  Ajouter 
                </a>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            {!isLoggedIn() ? (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success mr-2"
                    onClick={() => navigate("/login")}
                  >
                    Connexion
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/register")}
                  >
                    Créer un compte
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="navbar-text mr-3">
                    Bonjour, {userName}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Deconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
