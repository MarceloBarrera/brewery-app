import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/loans" activeStyle={activeStyle}>
        Loans
      </NavLink>
      {" | "}
      <NavLink to="/sponsors" activeStyle={activeStyle}>
        Sponsors
      </NavLink>
    </nav>
  );
};

export default Header;
