import { useState } from "react";
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
import Noti from "../../pages/Noti";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
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
              }}>
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
              }}>
              <Link to="/login">Nutritional</Link>
              Nutritional
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="about"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}>
              <Link to="/login">Progress Analytics</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="memberships"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}>
              <Link to="/login"> Educational Resources</Link>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              to="testimonials"
              style={{
                color: "black",
                fontFamily: "dancing script",
                fontSize: "1.2rem",
              }}>
              <Link to="/login">Login</Link>
            </NavLink>
          </NavList>
          <StyledButton primary={true}>Become a member</StyledButton>
        </NavLists>
        <Noti/>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
