
import { BsArrowUpRightCircleFill as ArrowIcon } from 'react-icons/bs';
import { BannerCTA, BannerContainer, BannerDetails, BannerTitle } from '../styles/Banner.styled';
import { StyledButton } from '../styles/Button.styled';

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <BannerTitle>WORKOUT PROGRAM MADE FOR YOU!</BannerTitle>
      <BannerCTA>
        <BannerDetails>
          Special programs that we provide for those of you who want to have a
          healthy and ideal body. Free to choose according to your goals!
        </BannerDetails>
        <StyledButton primary={true}>
          Join Now <ArrowIcon />
        </StyledButton>
      </BannerCTA>
    </BannerContainer>
  );
};
export default Banner;
