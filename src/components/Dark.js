import React from 'react';

export default function Dark(props) {
  const handleClick = () => {
    props.toggleDarkMode(); // first toggle the mode
    props.showAlert(
      props.darkMode
        ? "Light mode has been enabled"
        : "Dark mode has been enabled",
      "success"
    );
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark float-end m-3 mb-3"
        onClick={handleClick} // using the correct handler
      >
        {props.darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
}
