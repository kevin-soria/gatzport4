import React from 'react'
import Helmet from 'react-helmet'
// import PropTypes from 'prop-types'
import bgg from '../images/bg.jpg'
import bg2 from '../images/gatsby-icon.png'
import '../assets/scss/layout/_skills2.scss'
// import anime from "animejs"

const Work = () => {

	//   let close = (
		//       <div
		//         className="close"
		//         onClick={() => {
			//           this.props.onCloseArticle()
			//         }}
			//       ></div>
			// )
			return(
				<>
				{/* <ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\animOnScroll.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\animOnScroll.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\classie.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\modernizr.custom.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\dynamics.min.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\imagesloaded.pkgd.min.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\main.js" />
				<ScriptTag type="text/javascript" src="gatsby-starter-dimension\src\assets\js\masonry.pkgd.min.js" /> */}
<h2 className="major">Work</h2>
            <div className="isolayer isolayer--scroll1 isolayer--shadow">
				<ul className="grid grid--effect-flip">
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<img className="grid__img layer" src={bgg} alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src={bgg} alt="Canvas Dummy" />
<img className="grid__img layer" src={bg2} alt="Wireframe Dummy" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
				</ul>
			</div>
          <p>
           It works 2! and all following skills i used for project are:
          </p>
		  
		  {/* <Helmet>
			<script src="gatsby-starter-dimension\src\assets\js\animOnScroll.js" type="text/javascript" />
			<script src="gatsby-starter-dimension\src\assets\js\classie.js" />
			<script src="../assets/js/dynamics.min.jss" type="text/javascript" />
			<script src="../assets/js/imagesloaded.pkgd.min.js" type="text/javascript" />
			<script src="../assets/js/main.js" type="text/javascript" />
			<script src="../assets/js/masonry.pkgd.min.js" type="text/javascript" />
			<script src="../assets/js/modernizr.custom.js" type="text/javascript" />
			
			</Helmet> */}
</>
)

}
    
export default Work