import React from "react"
import "./components.scss";

const classnames = require('classnames');

export default function Navbar(props) {

  
  const navList = props.navOptions.map(navOption => {

    const navClass = classnames ("navbar-options", {
      "navbar-selected": props.selected === navOption,
    })
    return (
      <ul className={navClass} onClick={() => props.setNav(navOption)}> {navOption} </ul>
    )
  })

  return navList;
}