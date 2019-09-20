import React, { useState } from 'react';
import './App.css';
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  const [state, setState] = useState({
    navOption: "Personal-info",
    navOptions: ["Personal-info", "About", "Skills"]
  })

  const setNav = (navOption) => setState({...state, navOption})

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
          <PersonalInfo />
        </section>
        <section className="project">
          <Projects />
        </section>
      </div>
      <div className="bottom">
        <section className="about">
          <About />
        </section>
        <section className="skills">
          <Skills />
        </section>
      </div>
    </div>
  );
}

export default App;
