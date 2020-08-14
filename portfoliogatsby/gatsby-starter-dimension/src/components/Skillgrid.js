import React from 'react'
import anime from 'animejs/lib/anime.es.js';
// import PropTypes from 'prop-types'

import bgg from '../images/bg.jpg'
const Grid = () => {
  anime({
    targets: 'p',
    translateX: 50,
    rotate: '1turn',
    // backgroundColor: '#FFF',
    duration: 1500
  });
      // let close = (
      //       <div
      //         className="close"
      //         onClick={() => {
      //           this.props.onCloseArticle()
      //         }}
      //       ></div>
      // )
return(

<>

<h2 className="major">Work</h2>
          <span className="image main">
            <img src={bgg} alt="" />
          </span>
          <p>
           It works! and all following skills i used for project are:
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
</>
)

}
    
export default Grid