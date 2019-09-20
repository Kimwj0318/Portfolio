import React from "react"
import "./components.scss";

export default function About(props) {
  
  return (
    <div className="Content">
      <h2> About </h2>
      <p> A full stack developer with a background in materials engineering who seeks to challenge himself with complex problems. I am confident in my ability to become proficient in new technologies and I have a high attention to detail. My strength currently lies in front end development but I am working towards gaining more exposure in back end development</p>
      
      <h2> Skills </h2>
      <section>
        <h3> Languages </h3>
        <p> JavaScript, Ruby, Python, HTML, CSS</p>
      </section>
      <section>
       <h3> Testing </h3>
       <p> Mocha & Chai, Cypress, Jest, Storybook, RSpec</p>
      </section>
      <section>
        <h3> Frameworks and Libraries </h3>
        <p> NodeJS, ReactJS, Express, EJS, JQuery, Bootstrap, SASS, Babel, PostgreSQL, Git, AJAX </p>
      </section>
    </div>
  );
}