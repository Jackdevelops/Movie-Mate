import React, { useState, useEffect } from "react";
import "./App.css"; // Create this file for additional styling if needed

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply dark mode on component mount
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <br />
      <div className="settings-section">
        <label htmlFor="dark-mode-toggle">Dark Mode:</label>
        <input
          id="dark-mode-toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span>{isDarkMode ? "On" : "Off"}</span>
      </div>
    </div>
  );
};

export default Settings;
