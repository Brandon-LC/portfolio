import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Brandon Christensen
            </h1>
            <h2>
              Undergraduate in Computer Science
            </h2>
          </Fade>
          <Fade bottom>
            <div>
              <div className="btn-box">
                <a href={"https://drive.google.com/file/d/1153Dl3TMOueru-m4TK2JyC8XB45-7ewx/view?usp=sharing"} className="btn">
                  My Resume
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
