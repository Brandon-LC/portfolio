import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container navbar">
        <div className="navbar-wrapper">
          <div role="button" onClick={() => scrollTo("#about")} className="name" tabIndex={0}>
            Brandon's Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#experience")}>Experience</button>
            <button onClick={() => scrollTo("#courses")}>Course Work</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
