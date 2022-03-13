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
                    paragraph="Introduction to Data Mining. This course was my introduction to the Scikit-Learn 
                     library and to NumPy. I learned about data gathering and manipulation principles."
                    imgUrl={IDM}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/315/"/>
              <Card key={1}
                    heading="CPTS 427"
                    paragraph="Computer Security. This course taught me about computer security principles. I created my own
                     hash function to encrpyt and decrypt passwords which would be stored in a database."
                    imgUrl={CS}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/427/"/>
              <Card key={2}
                    heading="CPTS 350"
                    paragraph="Design and Analysis of Algorithms. This course taught me numerous classic algorithms in Computer Science 
                     (ex. InsertSort, QuickSort, QuickSelect, LinearSelect, MergeInsert, LongestCommonString, SCC, etc.). 
                     I also learned about thier space and time complexities."
                    imgUrl={DAA}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/350/"/>
              <Card key={3}
                    heading="CPTS 489"
                    paragraph="Web Development. This course taught me about Web Design Principles, as well as how to write a website in React Node.
                     I also learned about the importance of making a website accessible."
                    imgUrl={WD}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/489/"/>
              <Card key={4}
                    heading="CPTS 437"
                    paragraph="Introduction to Machine Learning. This course has taught me numerous differnt Machine Learning Techniques
                     (ex. DecisionTrees, NNearestNeighbors, Perceptron, NeuralNetworks, LinearRegression, etc.). I also learned how to evaluate
                     the efficacy of these techniques."
                    imgUrl={IML}
                    projectLink="https://www.coursicle.com/wsu/courses/CPTS/437/"/>
              <Card key={5}
                    heading="CPTS 487"
                    paragraph="Software Design and Architecture. This course I learned how to use MonoGame and Tiled to create a bullet hell type game.
                     The main focus was on design principles such as Factory Pattern, Composite Pattern, Object-Oriented Design, and Build Patterns.
                     We also wrote sequence diagrams and class diagrams to demonstrate the architecture of our program."
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
