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
                Hello, I am a Computer Science graduate from Washington State University.
                <br></br>
                <br></br>
                I enjoy playing Soccer in my free time, as well as playing video games with my friends when I have the time. I also go to the gym and cook new recipes as hobbies.
                <br></br>
                <br></br>
                I would like start out by maintaining old code bases, and then branching out into creating and authoring my own projects in the future.
                <br></br>
                <br></br>
                I am interested in Front-End Programming, Machine Learning, Automation, and anything else on the cutting edge of technology.
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
