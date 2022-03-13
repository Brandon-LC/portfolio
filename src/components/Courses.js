import React from "react"
import Fade from "react-reveal/Fade"
import Card from "./atoms/Card"

import SAD from "../images/487.png"
import IML from "../images/437.jpg"
import WD from "../images/489.png"
import DAA from "../images/350.png"
import CS from "../images/427.png"
import IDM from "../images/315.jpg"

const Courses = () => {
  return (
    <div className="section" id="courses">
      <div className="container">
        <div className="courses-wrapper">
          <Fade bottom>
            <h1>Coursework</h1>
            <h2>Some classes I learned from</h2>
            <h3>Hover over tiles!</h3>
          </Fade>

          <div className="grid">
            <Fade bottom>

              <Card key={0}
                    heading="CPTS 315"
                    paragraph="Introduction to Data Mining. This was a class I took and I did things in it"
                    imgUrl={IDM}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/315/"/>

              <Card key={1}
                    heading="CPTS 427"
                    paragraph="Computer Security. This was a class I took and I did things in it"
                    imgUrl={CS}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/427/"/>

              <Card key={2}
                    heading="CPTS 350"
                    paragraph="Design and Analysis of Algorithms. This was a class I took and I did things in it"
                    imgUrl={DAA}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/350/"/>

              <Card key={3}
                    heading="CPTS 489"
                    paragraph="Web Development. This was a class I took and I did things in it"
                    imgUrl={WD}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/489/"/>

              <Card key={4}
                    heading="CPTS 437"
                    paragraph="Introduction to Machine Learning. This was a class I took and I did things in it"
                    imgUrl={IML}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/437/"/>

              <Card key={5}
                    heading="CPTS 487"
                    paragraph="Software Design and Architecture. This was a class I took and I did things in it"
                    imgUrl={SAD}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/487/"/>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
