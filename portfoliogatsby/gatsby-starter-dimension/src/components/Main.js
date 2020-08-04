import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.jpg'
import pic01 from '../images/pic01.jpg'
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Grid from '../components/Skillgrid'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="About Me"
          className={`${this.props.article === 'About Me' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          You can call me Software Engineer. You can call me Software developer. Or you can call me Web developer. A bunch  of different names to say that I simpy LOVE to Code. to continue a career that challenges me, where there is room for growth, and most importantly, where I can contribute. Having experience within the environmental, public health, retail, education, and real estate sectors I've always had a passion for helping people. Being a full-stack web developer has not only fueled my passion for tech but also allowed me to acknowledge the possibilities of what software development can bring.
My previous work experience taught me a great deal about the type of concerns and customers face daily, and I grew to love providing solutions to those issues. Having the opportunity of being a part of a well-respected company such as Lockheed Martin would fit well with my professional and personal objectives.
Throughout building projects and web applications with my skills in JavaScript, Python, React, Flask, HTML, CSS, I was able to find a career where it not only felt like home but where I can contribute. Being able to integrate RESTful APIs, JSON, AJAX, MySQL has brought me a world of opportunities to manipulate and store databases for projects to help people and companies reach their goals and dreams.
Adopting Agile and Scrum methodologies into developing web apps has given me the ability to engineer projects that are not only engineering in an efficient, timely manner but also making web apps that are always growing and adapting to the world around us. Examining all of the phases of the Software Development Life Cycle (SDLC) has opened my eyes to where I can not only learn from the wonderful yet advanced technologies around me but also, has to lead me to realize where I can contribute and thrive.
Software and the tech industry provide me a field where I can implement, and continue to acquire, the skills as part of the effort to show that worldwide web is more than just the "WWW". The internet has, is, and will continue to have an influential effect on how everyone around the world. Therefore, I am proud to be a part of that. 
            <br/>
            <br/>
            <h3>By the way, check out my <a href="#work">awesome work</a>.</h3>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {/* <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            The following skills i used for project are:
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p> */}
          <Grid/>
          {close}
        </article>

        <article
          id="Experience"
          className={`${this.props.article === 'Experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
