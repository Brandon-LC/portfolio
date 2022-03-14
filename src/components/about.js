import React from "react"
import Fade from "react-reveal/Fade"
import brandon from "../images/brandon.jpg"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <Fade bottom>
              <p>
                Hello, I am a Computer Science graduate with a bachelor's degree from Washington State University.
                <br/>
                <br/>
                I enjoy playing Soccer, hitting the gym, playing video games with my friends, and learning to cook a new recipe in my free time.
                <br/>
                <br/>
                I would like to start out my career by maintaining old code bases, and then branching out into a leadership position where I can create and author my own projects.
                <br/>
                <br/>
                I am interested in Front-End Programming, Machine Learning, and anything else on the cutting edge of technology.
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="image-wrapper">
              <img className="image" src={brandon} alt="about"></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
