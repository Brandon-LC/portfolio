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
            <h3> Hover over tiles! </h3>
          </Fade>

          <div className="grid">
            <Fade bottom>
              <Card key={0}
                    heading="Software Internship"
                    paragraph="Interned at Aych Electronics from 2019 – 2020.
                    Created an application to manage the inventory & conditions of security cameras."
                    imgUrl={aych}
                    projectLink="https://aych.com/"/>
              <Card key={1}
                    heading="Golf Course Staff"
                    paragraph="Worked for Hawks Prairie Oki Golf Course from 2018 – 2021. 
                    I began working outside on the carts, where I was then promoted to supervising the 
                    outdoor staff while working in the Pro Shop. I also learned how to run the kitchen 
                    and cook for the restaurant and split time there."
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
