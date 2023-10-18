/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <label className="switch">
            <input
                type="checkbox"
                className="toggle"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeToggle;
