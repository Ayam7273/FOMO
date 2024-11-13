const Toggle = ({ toggleTheme, theme }) => {
  return (
    <label className="toggle">
      <span className="toggle-label">
        {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
      </span>
      <input
        onClick={toggleTheme}
        className="toggle-checkbox"
        type="checkbox"
      />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Toggle;
