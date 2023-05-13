import Loginform from './Loginform';

function BackgroundVideo() {
  const bgVideoStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  };
  
  const bgVideoContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',

  };
  const bgVideoTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: '1',
    color: '#fff',
  };
  

  return (
    <div style={bgVideoStyle}>
      <video style={bgVideoContentStyle} autoPlay muted loop>
        <source src="https://www.beachbodyondemand.com/assets/Hero_DESKTOP_Overlay.2c042fd051fc9a9b.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={bgVideoTextStyle}>
       <Loginform />
      </div>
    </div>
  );
}

export default BackgroundVideo;
