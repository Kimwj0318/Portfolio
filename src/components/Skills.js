import React from "react"
import "./components.scss";

export default function Skills(props) {
  
  return (
    <div className="Content">
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