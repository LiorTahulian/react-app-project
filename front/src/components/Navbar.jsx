import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user } = useAuth();

  const [themeMode, setThemeMode] = useState("light");
  const htmlTag = document.getElementsByTagName("html")[0];
  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
  }, [themeMode]);

  return (
    <nav
      style={{ backgroundColor: "#cd5c5c" }}
      className="navbar navbar-expand-lg navbar-light"
      aria-label="Fifth navbar example"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          RUN<i className="bi bi-4-circle"></i>U
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="about">
                About
              </NavLink>
            </li>

            {user?.biz && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-cards">
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign-out">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="btn"
          onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
          }}
        >
          {themeMode === "light" ? (
            <i className="bi bi-moon-stars"></i>
          ) : (
            <i className="bi bi-brightness-high"></i>
          )}
        </button>
      </div>
    </nav>
  );
};
