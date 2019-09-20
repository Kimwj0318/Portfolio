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
    navOptions: ["Personal-info", "About"]
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
          {state.navOption === PERSONALINFO && (
            <PersonalInfo />
          )}
          {state.navOption === ABOUT && (
            <About />
          )}
        </section>
        <section className="project">
          <Projects />
        </section>
      </div>
      
    </div>
  );
}

export default App;
