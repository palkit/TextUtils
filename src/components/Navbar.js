import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar({
  title = "Set Title Here",
  about = "About",
  // darkMode,
  // toggleDarkMode,
  showAlert,
  changeTheme,
  theme,
}) {
  // const dividerStyle = {
  //   borderBottom: "1px solid",
  //   borderColor: darkMode ? "#555" : "#ccc",
  // };
  const dividerStyle = {
    borderBottom: "1px solid",
    borderColor:
      theme === "dark" ? "#555" : theme === "dark" ? "#007bff" : "#ccc", // for 'primary' theme or other
  };

  return (
    <div>
      {/* <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      > */}
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {title}
          </Link> */}
          <a className="navbar-brand" href="#">
            {title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  {about}
                </Link> */}
              </li>
              {/* ...rest of your navbar items... */}

              <button
                 className={`${
                  "btn btn-light btn-outline-danger btn-sm ms-2"
                }`}
                onClick={() => {
                  changeTheme("light");
                  showAlert("Light mode has been enabled", "success");
                }}
              >
                Light
              </button>
              <button
               className={`${
                  "btn btn-dark btn-outline-info btn-sm ms-2"
                }`}
                onClick={() => {
                  changeTheme("dark");
                  showAlert("Dark mode has been enabled", "success");
                }}
              >
                Dark
              </button>
              <button
                className={`${
                  "btn  btn-primary btn-outline-warning btn-sm ms-2"
                }`}
                onClick={() => {
                  changeTheme("primary");
                  showAlert("Primary mode has been enabled", "success");
                }}
              >
                Blue
              </button>

              {/* <button
                type="button"
                onClick={() => {
                  toggleDarkMode();
                  showAlert(
                    darkMode
                      ? "Light mode has been enabled"
                      : "Dark mode has been enabled",
                    "success"
                  );
                }}
                className={`${
                  darkMode
                    ? "btn btn-outline-light btn-sm ms-2"
                    : "btn btn-outline-dark btn-sm ms-2"
                }`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button> */}
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button 
               className={`${
                theme==="primary" ?
                  "btn btn-outline-info": "btn btn-outline-success"
                }`}
                 type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={dividerStyle}></div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
