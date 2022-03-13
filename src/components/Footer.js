import React from "react"
import Fade from "react-reveal/Fade"

import resume from "../images/resume.png"
import linkedIn from "../images/linkedIn.png"
import github from "../images/github.png"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact Me</h1>
            <h2>Reach me here!</h2>
          </Fade>
          <a className="email-link" href={`mailto:${"brandonlcode@gmail.com"}`}>
            brandonlcode@gmail.com
          </a>

          <div className="phone">
            Phone: 360-972-6446
          </div>

          <div className="icon-box">

            <div className="social-icons">
              <a key={0} href="https://www.linkedin.com/in/brandon-christensen-4a413a229/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="icons"></img>
              </a>
            </div>

            <div className="social-icons">
              <a key={1} href="https://github.com/Brandon-LC" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="icons"></img>
              </a>
            </div>

            <div className="social-icons">
              <a key={2} href="https://drive.google.com/file/d/1er18cZ8rt--7UtMScUdWzTNkE-3f-2B2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={resume} alt="icons"></img>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
