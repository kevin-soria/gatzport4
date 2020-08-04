import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"



const Footer = (props) => (
    
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Soria Software Engineering: <a href="https://www.linkedin.com/in/kevin-soria/">Portfolio Website</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
