import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div className="card" style={{backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" + imgUrl + ")",}}>
      <div className="content">
        <h1 className="header">
          {heading}
        </h1>
        <div className="underline"/>
        <p className="text">
          {paragraph}
        </p>
        <div>
          <div className="btn-box">
            <a href={projectLink ? projectLink : "#"} target="_blank" rel="noopener noreferrer" className="btn">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
