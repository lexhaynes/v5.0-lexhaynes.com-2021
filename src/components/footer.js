import * as React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer has-text-centered contrast" id="skills">
            <div className="container">
                <div className="column is-8-desktop is-offset-2-desktop">
                <p>
                    Copyright &copy; {currentYear} Alexandra Haynes
                </p>
                </div>
            </div>
      </footer>
    )
}

export default Footer;