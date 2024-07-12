import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../DarkStyle.css"; // Import CSS for styling

const DarkModeToggle = () => {
  const [mode, setMode] = useState("light"); // Initialize mode as light

  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <button
      className={`mode-toggle ${mode}`}
      onClick={toggleMode}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {mode === "light" ? (
        <FontAwesomeIcon icon={faSun} className="icon" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="icon moon-icon" />
      )}
    </button>
  );
};

export default DarkModeToggle;
