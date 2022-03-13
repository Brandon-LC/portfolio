import React from "react"
import Fade from "react-reveal/Fade"

import python from "../images/python.png"
import agile from "../images/agile.png"
import nodeReact from "../images/node-react.png"
import flask from "../images/flask.png"
import mongo from "../images/mongo.png"
import testCafe from "../images/test-cafe.png"
import oauth from "../images/oauth.png"
import vsc from "../images/vsc.png"

const Skills = () => {
  
  function displaySkill(x) {
    if (x == 0) {
      document.getElementById("skillDiv").textContent = "Python is very cool"
    } else if (x==1) {
      document.getElementById("skillDiv").textContent = "Agile devlopment text." +
      "This will be a paragraph to explain when and how I have used agile. I will also explain what I like and dislike about agile. maybe not the dislike part..."
    } else if (x==2) {
      document.getElementById("skillDiv").textContent = "I also like node react"
    } else if (x==3) {
      document.getElementById("skillDiv").textContent = "I know some flask routes"
    } else if (x==4) {
      document.getElementById("skillDiv").textContent = "Mango Database stuff"
    } else if (x==5) {
      document.getElementById("skillDiv").textContent = "Black Box White Box All Box"
    } else if (x==6){
      document.getElementById("skillDiv").textContent = "Google Oauth and GitHub Oauth"
    } else if (x==7){
      document.getElementById("skillDiv").textContent = "Some IDES"
    } else {
      document.getElementById("skillDiv").textContent = "Hover over skill to display more information"
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
                <img src={agile} alt="css"/>
                <p>
                  Agile Software Development
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
                    <img src={nodeReact} alt="css"/>
                    <p>
                      Node React
                    </p>
                  </div>

                  <div className="skill" key={3}
                    onMouseEnter={() => displaySkill(3)}
                    onMouseLeave={() => displaySkill(-1)}>
                    <img src={flask} alt="css"/>
                    <p>
                      Flask Routes
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
                      <img src={mongo} alt="css"/>
                      <p>
                        Mongo DB
                      </p>
                    </div>

                    <div className="skill" key={5}
                      onMouseEnter={() => displaySkill(5)}
                      onMouseLeave={() => displaySkill(-1)}>
                      <img src={testCafe} alt="css"/>
                      <p>
                        Test Cafe
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
                <img src={oauth} alt="css"></img>
                <p>
                  Google Oauth
                </p>
              </div>

              <div className="skill" key={7}
                onMouseEnter={() => displaySkill(7)}
                onMouseLeave={() => displaySkill(-1)}>
                <img src={vsc} alt="css"></img>
                <p>
                  Visual Studio Code
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
