import GetDate from "./GetDate";
import Toggle from "./Toggle";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <div className="header-titles">
        <h1>FOMO</h1>
        <GetDate />
      </div>
      <Toggle toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
};

export default Header;
