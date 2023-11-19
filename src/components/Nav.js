import '../styles/Nav.css';
import logo from '../images/logo.png'

export const Nav = (props) => {

  const showForm = () => {
    props.setEmailForm(true)
    setTimeout(() => {
      props.setEmailText(true);
    }, 600)
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <img className='logo' src={logo}/>
      </div>
      <div className="nav-center">
        <a href='#home'>Home</a>
        <a href='#features'>Features</a>
        <a href='#pricing'>Pricing</a>
        <a href='#footer'>About</a>
      </div>
      <div className="nav-right">
        <button onClick={showForm}>HIRE ME</button>
      </div>
    </div>
  )
}