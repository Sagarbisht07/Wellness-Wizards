import Image from '@/assets/program1-img.png';
import { CloseMenu, MobileBottomText, MobileHeader, MobileImg, MobileLink, MobileList, MobileLogo, MobileMenuImage, MobileNavList, MobileStyledNav } from '../styles/MobileNav.styled';
import { StyledButton } from '../styles/Button.styled';

type MobileNavProps = {
  isOpen: boolean;
  toggleHandler: () => void;
};

const MobileNav = ({ isOpen, toggleHandler }: MobileNavProps): JSX.Element => {
  return (
    <MobileStyledNav isOpen={isOpen}>
      <MobileHeader>
        <MobileLogo>Intrepide</MobileLogo>
        <CloseMenu onClick={toggleHandler} />
      </MobileHeader>
      <MobileNavList>
        <MobileList>
          <MobileLink
            to='/'
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Home
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to='programs'
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Programs
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to='about'
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            About Us
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to='memberships'
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Memberships
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to='testimonials'
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Testimonials
          </MobileLink>
        </MobileList>
      </MobileNavList>
      <StyledButton
        onClick={toggleHandler}
        style={{ width: '100%', marginTop: '1rem' }}
        primary={true}
      >
        Become a member
      </StyledButton>
      <MobileMenuImage>
        <MobileImg src={""} alt="img" />
      </MobileMenuImage>
      <MobileBottomText>Make it or break it!</MobileBottomText>
    </MobileStyledNav>
  );
};

export default MobileNav;