import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import golf from "../images/golf.png"
import aych from "../images/aych.png"


const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-wrapper">
          <Fade bottom>
            <h1>Experience</h1>
            <h2>Fresh perspectives</h2>
            <h3>Hover over tiles!</h3>
          </Fade>

          <div className="grid">
            <Fade bottom>
              <Card key={0}
                    heading="Software Internship"
                    paragraph="I interned at Aych Electronics over the Summer of 2019 as a Junior Software 
                     Developer. I created an application to manage the inventory and conditions of security cameras that the company would sell and install."
                    imgUrl={aych}
                    projectLink="https://aych.com/"/>
              <Card key={1}
                    heading="Golf Course Staff"
                    paragraph="I worked at the Hawks Prairie Golf Course over the Summers of 2018-2021. I began working outside on the carts but was quickly 
                     moved into a supervising position in the Pro Shop. I also learned how to run and cook inside the kitchen, so that I could be flexible 
                     and split time in the restaurant."
                    imgUrl={golf}
                    projectLink="https://hawksprairiegolf.com/"/>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
