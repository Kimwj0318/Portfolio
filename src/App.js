import React, { useState } from 'react';
import './App.css';
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const PERSONALINFO = "Personal-info";
const ABOUT = "About";

function App() {
  const [state, setState] = useState({
    navOption: "Personal-info",
    navOptions: ["Personal-info", "About"],
    project: "",
    projects: [
      {
        name: "TinyApp",
        image: "source",
        desc: "Full stack web application that allows users to shorten urls built wiht Node and Express",
        github: "github"
      },
      {
        name: "Tweeter",
        image: "source",
        desc: "A single page twitter clone implementing AJAX JQuery, CSS, and HTML",
        github: "github"
      },
      {
        name: "Pick-Me-Up",
        image: "source",
        desc: "Online pick me up app replica developed with a Lighthouse Labs cohort member that allows users to place an order online which sends the 'client' and 'restaurant owner' a text using JS, CSS, EJS, PostgreSQL, JQuery, and twilio",
        github: "github"
      },
      {
        name: "Interview Scheduler",
        image: "source",
        desc: "Full stack web application built with React. Allows users to create, edit, and delete interviews in the interview planner developed using ReactJS, PostgreSQL, Jest, Cypress, and Storybook",
        github: "github"
      }
    ]
  })

  const setNav = (navOption) => setState({...state, navOption})
  const setProject = (project) => setState({...state, project})

  return (
    <div className="App">
      <div className="top">
        <section className="personal-info">
          <nav className="navbar">
            <Navbar
              selected={state.navOption}
              navOptions={state.navOptions}
              setNav = {setNav}
            />
          </nav>
          {state.navOption === PERSONALINFO && (
            <PersonalInfo />
          )}
          {state.navOption === ABOUT && (
            <About />
          )}
        </section>
        <section className="project">
          <Projects 
            selected={state.project}
            projectOptions={state.projects}
            setProject={setProject}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
