import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header"
import Layout from "./components/layout"
import Projects from "./components/Projects"
import About from "./components/about"
import Skills from "./components/skills"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Experience from "./components/Experience"

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Courses/>
      <Footer/>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);