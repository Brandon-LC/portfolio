import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import boeing from "../images/boeing.jpg"
import machine from "../images/machine.jpg"
import speedScore from "../images/speed-score.png"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
            <h2> Here are some projects I have worked on</h2>
            <h3> Hover over tiles! </h3>
          </Fade>

          <div className="grid">
            <Fade bottom>
              <Card key={0}
                    heading="Boeing Automated Taxonomy Creation"
                    paragraph="I was Team Lead for this year long senior project.
                    Creates Taxonomies from vocabularies parsed using an NLP parser.
                    Creates Relationships between Taxonomies to create a hierarchy.
                    Created a front-end to visualize Taxonomy creation process and a UI to interact with 
                    the process."
                    imgUrl={boeing}
                    projectLink="https://github.com/WSUCptSCapstone-Fall2021Spring2022/boeing-naturallanguageprocessing"/>
              <Card key={1}
                    heading="Stock Market Algorithmic Trading & Machine Learning"
                    paragraph="This was a personal project I used to learn more about Machine Learning, and to
                    test if it might be viable to algorithmically trade on the stock market.
                    Ability to create custom made trading strategies using stock market signifiers.
                    Ability to test strategies on old stock data (from TD Ameritrade API) and visualize 
                    the results."
                    imgUrl={machine}
                    projectLink="https://github.com/Brandon-LC/AlgoTrading"/>
              <Card key={2}
                    heading="SpeedScore Web Application"
                    paragraph="I was Team Lead for this semester long project.
                    Web application to log golf scores, golf courses, and interact with other users.
                    I independently proposed and implemented new functionality for the app (created 
                    an achievement/ badge system to gamify the app)"
                    imgUrl={speedScore}
                    projectLink="https://github.com/wsu-cpts489-fa21/ia8-Brandon-LC"/>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
