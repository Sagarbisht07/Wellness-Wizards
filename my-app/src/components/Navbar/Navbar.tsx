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
import Noti from "../../pages/Noti";
import Logout from "../../pages/Logout";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  let myName = localStorage.getItem("user");
  let token = localStorage.getItem("token");

  React.useEffect(() => {
    const name = myName ?? "";
    setName(name);
  }, [myName]);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    if (isLoggedIn()) {
      localStorage.clear();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("token"));
  };

  // //handleNutrition
  const handleNutrition = () => {
    if (token) {
      navigate("/nutritionalmain");
    } else {
      navigate("/login");
    }
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
              <button
                onClick={handleNutrition}
              
              >Nutritional</button>
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
                {isLoggedIn() ? <Logout/> : "Login"}
              </button>
            </NavLink>
          </NavList>

          <StyledButton primary={true}>
            {`Welcome ${name.toUpperCase()}`}
          </StyledButton>
        </NavLists>
        <Noti/>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
