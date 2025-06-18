import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
// import Dark from "./components/Dark";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (newTheme) => {
    // document.title =`TextUtils-${newTheme}`
    setTheme(newTheme);
    //  showAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode has been enabled`, "success");

    // setInterval(()=>{
    //   document.title =`TextUtils-${newTheme}`
    // },2000)
    // setInterval(()=>{
    //   document.title =`TextUtils`
    // },1500)
  };

  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000); // auto dismiss after 2s
  };

  return (
    // <div className={`app-container ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ minHeight: "100vh" }}>

    // <Router>
    <div
      className={`app-container bg-${theme} text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      <Navbar
        theme={theme}
        changeTheme={changeTheme}
        title="TextUtils"
        // darkMode={darkMode}
        // toggleDarkMode={toggleDarkMode}
        showAlert={showAlert}
      />
      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
           exact path="/"
            element={<TextForm textarea="ANALYSE TEXT" showAlert={showAlert} />}
          />
        </Routes> */}
      <TextForm textarea="ANALYSE TEXT" showAlert={showAlert} />
      {alert && <Alert message={alert.message} type={alert.type} />}

      {/* <Dark toggleDarkMode={toggleDarkMode } darkMode={darkMode} /> */}

      <div
        className="container py-3"
        //  darkMode={darkMode}
        theme={theme}
      ></div>
    </div>
    // </Router>
  );
}

export default App;
