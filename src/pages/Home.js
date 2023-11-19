
import { Copyright } from '../components/Copyright'
import { EmailPopup } from '../components/EmailPopup';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { HomeOpen } from '../components/HomeOpen';
import { Pricing } from '../components/Pricing';
import '../styles/Home.css';

export const Home = (props) => {

  return (
    <div className="home">
      <HomeOpen setEmailForm={props.setEmailForm} setEmailText={props.setEmailText}/>
      <Features />
      <Pricing />
      <Footer />
      <Copyright />
      {props.emailForm && <EmailPopup emailText={props.emailText} setEmailForm={props.setEmailForm} setEmailText={props.setEmailText}/>}
    </div>
  )
}