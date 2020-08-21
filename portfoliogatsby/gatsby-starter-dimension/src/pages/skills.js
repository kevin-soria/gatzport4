// // import React from 'react'
// import React from 'react'
// import Layout from '../components/layout'
// import Header from '../components/Header'
// import Skills2 from '../components/skills2'
// import Skill from '../components/3skills'
// import Footer from '../components/Footer'
// import '../assets/scss/main.scss'
// import { StaticQuery, graphql } from "gatsby"

// class IndexPage3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isArticleVisible: true,
//       timeout: true,
//       articleTimeout: true,
//       article: 'work',
//       loading: 'is-loading'
//     }
//     this.handleOpenArticle = this.handleOpenArticle.bind(this)
//     this.handleCloseArticle = this.handleCloseArticle.bind(this)
//     this.setWrapperRef = this.setWrapperRef.bind(this);
//     this.handleClickOutside = this.handleClickOutside.bind(this);
//   }
  
  
//   componentDidMount () {
    
//     this.timeoutId = setTimeout(() => {
//       this.setState({loading: ''});
//     }, 100);
//     document.addEventListener('mousedown', this.handleClickOutside);
    
//   }
  
//   componentWillUnmount () {
//     if (this.timeoutId) {
//         clearTimeout(this.timeoutId);
//     }
//     document.removeEventListener('mousedown', this.handleClickOutside);
//   }

//   setWrapperRef(node) {
//     this.wrapperRef = node;
//   }
  
//   handleOpenArticle(article) {
    
//     this.setState({
//       isArticleVisible: !this.state.isArticleVisible,
//       article
//     })

//     setTimeout(() => {
//       this.setState({
//         timeout: !this.state.timeout
//       })
//     }, 325)

//     setTimeout(() => {
//       this.setState({
//         articleTimeout: !this.state.articleTimeout
//       })
//     }, 350)

//   }

//   handleCloseArticle() {

//     this.setState({
//       articleTimeout: !this.state.articleTimeout
//     })

//     setTimeout(() => {
//       this.setState({
//         timeout: !this.state.timeout
//       })
//     }, 325)

//     setTimeout(() => {
//       this.setState({
//         isArticleVisible: !this.state.isArticleVisible,
//         article: ''
//       })
//     }, 350)

//   }

//   handleClickOutside(event) {
//     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
//       if (this.state.isArticleVisible) {
//         this.handleCloseArticle();
//       }
//     }
//   }


//   render() {
//     // createRoutes();
//     <StaticQuery
//     query={graphql`{
//       allMarkdownRemark(
//         filter: { fields: { slug: { regex: "/experience/" } } }
//       ) {
//         totalCount
//         edges {
//           node {
//             id
//             frontmatter {
//               skills {
//                 title
//                 image {
//                   childImageSharp {
//                     fluid(maxWidth: 200) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     `}
//     render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
//   ></StaticQuery>
//     let allSkills = []
//     if (((data || {}).allMarkdownRemark || {}).edges) {
//       // Select non duplicated skills from all jobs
//       allSkills = data.allMarkdownRemark.edges.reduce(
//         (
//           mySkills,
//           {
//             node: {
//               frontmatter: { skills },
//             },
//           }
//         ) => {
//           if (skills) {
//             const currentSkils = skills.reduce((acumSkills, currentSkill) => {
//               // If the skill don't exists in array add it
//               if (!mySkills.find(({ title }) => title === currentSkill.title)) {
//                 acumSkills.push(currentSkill)
//               }
//               return acumSkills
//             }, [])
//             return [...mySkills, ...currentSkils]
//           }
//           return mySkills
//         },
//         []
//       )
//     }
   
//     return (
//       <Layout location={this.props.location}>
//         <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
//           <div id="wrapper">
//             <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
//             {/* <Router basepath="/index"> */}
//             {/* <Main
//               isArticleVisible={this.state.isArticleVisible}
//               timeout={this.state.timeout}
//               articleTimeout={this.state.articleTimeout}
//               article={this.state.article}
//               onCloseArticle={this.handleCloseArticle}
//               setWrapperRef={this.setWrapperRef}
//             /> */}
//             <Skills2/>
//             <Skill   
//             skills={allSkills}
//         type="scrollable"
//         title="Skills"
//         description="These are the skills that I have acquired through my years of
//             experience working as a software developer, the order is based on
//             the ones I like most and or I have used."
//         transitionStatus="entered"/>
//             {/* </Router> */}
//             <Footer timeout={this.state.timeout} />
//           </div>
//           <div id="bg"></div>
//         </div>
//       </Layout>
//     )
//     }
//   }

// export default IndexPage3

// // export const query = graphql`
// //   query {
// //     allMarkdownRemark(
// //       filter: { fields: { slug: { regex: "/experience/" } } }
// //     ) {
// //       totalCount
// //       edges {
// //         node {
// //           id
// //           frontmatter {
// //             skills {
// //               title
// //               image {
// //                 childImageSharp {
// //                   fluid(maxWidth: 200) {
// //                     ...GatsbyImageSharpFluid
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }