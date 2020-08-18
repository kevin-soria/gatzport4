import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kevin Soria</h1>
        <p>
          A Portfolio Website for showcasing as a {' '}
          <a href="https://github.com/kevin-soria">Software Engineer</a>
          <br />
          {' '}available for hire and available to{' '}
          <a href="https://www.linkedin.com/in/kevin-soria/">
            Contact
          </a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('About Me')
            }}
          >
            About Me
          </button>
        </li>
        <li>
        <Link to="/Skillpage">
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
          </Link>
        </li>
        {/* <li>
          <Grid src={'../images/skills/agile.png'}/>
            Work
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Experience')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
