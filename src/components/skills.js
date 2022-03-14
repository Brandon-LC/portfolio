import React from "react"
import Fade from "react-reveal/Fade"
import python from "../images/python.png"
import agile from "../images/agile.png"
import reactNode from "../images/react-node.png"
import testCafe from "../images/test-cafe.png"
import oauth from "../images/oauth.png"
import js from "../images/js.png"
import git from "../images/git.jpg"
import oop from "../images/oop.png"

const Skills = () => {
  
  function displaySkill(x) {
    if (x == 0) {
      document.getElementById("skillDiv").textContent = 
        "I am proficent in Python and have used it extensively in coursework. It is my perfered programming language."
    } else if (x==1) {
      document.getElementById("skillDiv").textContent = 
        "I have written multiple full-stack websites for coursework, all of which used React Node."
    } else if (x==2) {
      document.getElementById("skillDiv").textContent = 
        "I have written tests in Test Café and Mockito. I am also familiar with black-box and white-box testing techniques."
    } else if (x==3) {
      document.getElementById("skillDiv").textContent =
        "I have implemented log-in pages which use Google OAuth and GitHub OAuth for security."
    } else if (x==4) {
      document.getElementById("skillDiv").textContent = 
        "I am proficient in the full-stack of web design (.css, .html, .js). I especially enjoy working on the front-end portion of web design."
    } else if (x==5) {
      document.getElementById("skillDiv").textContent = 
        "I have used Git Version Control for most of my coursework and all of my projects. I am also familiar with the NPM Package Manager."
    } else if (x==6){
      document.getElementById("skillDiv").textContent = 
        "Most of my projects have used the Agile Software Delopment process. I also have used GitHub Project Boards."
    } else if (x==7){
      document.getElementById("skillDiv").textContent = 
        "I am comfortable with the use of Object-Oriented Design principles. I also have experience drawing class diagram and sequence diagrams."
    } else {
      document.getElementById("skillDiv").textContent =
        "Hover over a skill to display more information"
    }
    
  }

  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <Fade top>
            <h1>Skills</h1>
            <h2>Some of the things I have picked up along the way</h2>
            <div className="skills-grid">
              <div className="skill" key={0} 
                onMouseEnter={() => displaySkill(0)}
                onMouseLeave={() => displaySkill(-1)}>
                <img src={python} alt="css"/>
                <p>
                  Python
                </p>
              </div>
              <div className="skill" key={1}
                onMouseEnter={() => displaySkill(1)}
                onMouseLeave={() => displaySkill(-1)}>
                <img src={reactNode} alt="css"/>
                <p>
                React Node
                </p>
              </div>
            </div>
          </Fade>
          <div className="skills-center-container">
            <Fade left>
              <div className="skills-center-box">
                <div className="skills-grid skills-grid2">
                  <div className="skill" key={2}
                    onMouseEnter={() => displaySkill(2)}
                    onMouseLeave={() => displaySkill(-1)}>
                    <img src={testCafe} alt="css"/>
                    <p>
                      Test Café
                    </p>
                  </div>

                  <div className="skill" key={3}
                    onMouseEnter={() => displaySkill(3)}
                    onMouseLeave={() => displaySkill(-1)}>
                    <img src={oauth} alt="css"/>
                    <p>
                      Google/ GitHub Oauth
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <div className="skills-center-box skill-text-box">
              <div className="skill-text" id="skillDiv">
                Hover over a skill to display more information
              </div>
            </div>
            <Fade right>
              <div className="skills-center-box">
                  <div className="skills-grid skills-grid2">
                    <div className="skill" key={4}
                      onMouseEnter={() => displaySkill(4)}
                      onMouseLeave={() => displaySkill(-1)}>
                      <img src={js} alt="css"/>
                      <p>
                        Web Design
                      </p>
                    </div>

                    <div className="skill" key={5}
                      onMouseEnter={() => displaySkill(5)}
                      onMouseLeave={() => displaySkill(-1)}>
                      <img src={git} alt="css"/>
                      <p>
                        Git Version Control
                      </p>
                    </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="skills-grid">
              <div className="skill" key={6}
                onMouseEnter={() => displaySkill(6)}
                onMouseLeave={() => displaySkill(-1)}>
                <img src={agile} alt="css"></img>
                <p>
                  Agile Software Development
                </p>
              </div>
              <div className="skill" key={7}
                onMouseEnter={() => displaySkill(7)}
                onMouseLeave={() => displaySkill(-1)}>
                <img src={oop} alt="css"></img>
                <p>
                  Object-Oriented Programming
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Skills
