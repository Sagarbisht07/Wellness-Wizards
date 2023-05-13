import { useState } from "react";
import React from "react";
import MobileNav from "./MobileNavigation";
import {
  Menu,
  NavLink,
  NavList,
  NavLists,
  StyledNavbar,
} from "../styles/Navbar.styled";
import { StyledButton } from "../styles/Button.styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  let myName = localStorage.getItem("user");

  React.useEffect(() => {
    const name = myName ?? "";
    setName(name);
  }, [myName]);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    if (isLoggedIn()) {
      // User is logged in, so log them out
      localStorage.clear();
      navigate("/");
    } else {
      // User is not logged in, so take them to login page
      navigate("/login");
    }
  };

  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("token"));
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandler={toggleHandler} />
      <StyledNavbar>
        <Link to="/">
          <img src="logonew.png" alt="logo" className="w-60" />
        </Link>

        <Menu onClick={toggleHandler} />
        <NavLists>
          <NavList>
            <NavLink
              to=""
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <Link to="/login">Workout</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="programs"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <Link to="/nutritional">Nutritional</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="about"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <Link to="/progress">Progress Analytics</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="memberships"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <Link to="/educational"> Educational Resources</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="testimonials"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <button onClick={handleButtonClick}>
                {isLoggedIn() ? "Logout" : "Login"}
              </button>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="testimonials"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}
            >
              <Link to="/register">Register</Link>
            </NavLink>
          </NavList>
          <StyledButton primary={true}>
            {`Welcome ${name.toUpperCase()}`}
          </StyledButton>
        </NavLists>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
