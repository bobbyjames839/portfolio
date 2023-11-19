import image from '../images/header.png';

export const HomeOpen = (props) => {

  const showForm = () => {
    props.setEmailForm(true)
    setTimeout(() => {
      props.setEmailText(true);
    }, 600)
  }

  return (
    <>
      <span className='background-shape'></span>
      <span className='background-shape-small'></span>
      <span className='background-shape-smallest'></span>
      <div className="home-open" id='home'>
        <div className="home-open-left">
          <h4>CREATE YOUR SITE LIKE A PRO</h4>
          <h1>Hi, I'm <span>Bobby</span>, Web Developer</h1>
          <p>hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby, hello there im bobby</p>
          <button onClick={showForm}>GET STARTED</button>
        </div>
        <div className="home-open-right">
          <img src={image}/>
        </div>
      </div>
     </>
  )
}