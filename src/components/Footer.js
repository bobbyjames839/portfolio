import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <div className="footer" id='footer'>

      <div className="footer-left">

        <div className="nav-left-footer-version">
          <img className='logo' src={logo}/>
        </div>

        <p>This is an app created by Bobby Davidson, thank you for viewing</p>

        <div className='socials'>
          <i className='fa fa-instagram'></i>
          <i className='fa fa-twitter'></i>
          <i className='fa fa-facebook'></i>
          <i className='fa fa-youtube'></i>
        </div>

      </div>

      <div className="footer-right">

        <div className='footer-right-section'>
          <h5>Company</h5>
          <p>Business</p>
          <p>Partnerships</p>
          <p>Network</p>
        </div>

        <div className='footer-right-section'>
          <h5>About Us</h5>
          <p>Blogs</p>
          <p>Channels</p>
          <p>Sponsors</p>
        </div>

        <div className='footer-right-section'>
          <h5>Contact</h5>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>

      </div>
    </div>
  )  
}