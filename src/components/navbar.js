import * as React from 'react'
import { Link } from "gatsby"


const NavBar = () => {
    const [active, setActive] = React.useState(false);

    const burgerClick = () => {
        setActive(!active);
    }

return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="container">
    <div className="navbar-brand">
       <Link className="navbar-item" to="/">
        <span className="logo">Alexandra Haynes</span>
      </Link> 
      <button className={`navbar-burger burger ${active}`} onClick={burgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div className={`navbar-menu ${active}`}>
      <div className="navbar-start">
        <a className="navbar-item" href="/#about">About </a>
        <a className="navbar-item" href="/#portfolio"> Portfolio </a>       
        <a className="navbar-item" href="/#skills"> Skills </a>       
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" href="https://www.linkedin.com/in/alexandra-haynes-36349184/" target="blank">
               
              <strong>Get in Touch</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;