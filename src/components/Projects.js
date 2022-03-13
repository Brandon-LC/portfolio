import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import boeing from "../images/boeing.png"
import machine from "../images/machine.png"
import speedScore from "../images/speed-score.png"
import flixmix from "../images/flix-mix.png"
import marooned from "../images/marooned.png"

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
                heading="Boeing NLP Taxonomy"
                paragraph="I was team lead for my senior design project where we got to work with Boeing to make a better data 
                 science tool which could create taxonomies using Natural Lanugage Processing. We created a front-end, had the 
                 ability to create relationships between categories in the taxonomy, and used CRUD operations to read and write to .csv files."
                imgUrl={boeing}
                projectLink="https://github.com/WSUCptSCapstone-Fall2021Spring2022/boeing-naturallanguageprocessing"/>
              <Card key={1}
                heading="Algorithmic Stock Market Trading & Machine Learning"
                paragraph="This was a personal project where I used Machine Learning techniques to test trading algorithms 
                 on old stock data from the TD Ameritrade API. I created my own stock trading algorithms using technical indicators,
                 classified and back tested the data, and visualized the results."
                imgUrl={machine}
                projectLink="https://github.com/Brandon-LC/TD-Ameritrade-Algo-Trading"/>
              <Card key={2}
                heading="Marooned Game"
                paragraph="This was a class project where our team designed and implemented a bullet hell game inspired by Touhou Project.
                 To create the game, we learned how to use MonoGame and Tiled. We also focused on using proper design principles such as 
                the Factory Pattern and the Composite Pattern."
                imgUrl={marooned}
                projectLink="https://github.com/Brandon-LC/Marooned-Game"/>
            </Fade>
          </div>

          <div className="grid2">
            <Fade bottom>
              <Card key={3}
                heading="SpeedScore App"
                paragraph="I was team lead for this project, where we created a web application for speed golfers to record their scores
                 and courses that they have golfed at. Independently from the class, I proposed new functionality to add a badge/ achievement
                 system to gamify the app creating a more interactive user experience."
                imgUrl={speedScore}
                projectLink="https://github.com/wsu-cpts489-fa21/SpeedScore-App"/>
              <Card key={4}
                heading="FlixMix App"
                paragraph="For this class project, we created a web application for users to rate and review movies. We used React Node and Flask
                 Routes to create the front-end, Flask SQL to create a database of users and their reviews, and Werkzeug to add log-in security."
                imgUrl={flixmix}
                projectLink="https://github.com/Brandon-LC/Flix-Mix-App"/>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
