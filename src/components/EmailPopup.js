import { useEffect, useState } from "react"

export const EmailPopup = (props) => {

  const hideEmail = () => {

    const form = document.getElementById('emailPopup');
    const blurred = document.getElementById('blurred');
    form.classList.add('email-moved');
    blurred.classList.add('email-moved');

    setTimeout(() => {
      props.setEmailForm(false);
      props.setEmailText(false);
      form.classList.remove('email-moved');
      blurred.classList.remove('email-moved');
    }, 2000)
  }

  const submitForm = () => {}





  return (
    <>
      <div className='blurred' id="blurred"></div>
      <div className='email-popup' id="emailPopup">
            {props.emailText && 
              <>
                <div className="email-content">

                <div className="email-content-top">
                  <h3 className="email-title"><span className="bigger-text">Heyyy</span>, <span className="outlined-text">Bobby</span> would love to hear from you</h3> 
                  <i className="fa fa-times" onClick={hideEmail}></i>
                </div>

                <h4>Please input the sections below and he will be in touch soon!</h4>
                <p className="email-section">Name</p>
                <input type='text' placeholder="Input name here..."/>
                <p className="email-section">Email</p>
                <input type='email' placeholder="Input email here..."/>
                <p className="email-section">Message</p>
                <textarea placeholder="Input message here..."></textarea>

                <div className="email-button">
                  <button onClick={submitForm}>SEND</button>
                </div>
                </div>
              </>}
      </div>
    </>
  )
}