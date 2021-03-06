import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Skill from '../components/3skills'

export default ({ data, transitionStatus }) => {
  let allSkills = [];
  allSkills = data.allMarkdownRemark.edges
    if (((data || {}).allMarkdownRemark || {}).edges) {
    // Select non duplicated skills from all jobs
    allSkills = data.allMarkdownRemark.edges.reduce(
      (
        mySkills,
        {
          node: {
            frontmatter: { skills },
          },
        }
      ) => {
        if (skills) {
          const currentSkils = skills.reduce((acumSkills, currentSkill) => {
            // If the skill don't exists in array add it
            if (!mySkills.find(({ title }) => title === currentSkill.title)) {
              acumSkills.push(currentSkill)
            }
            return acumSkills
          }, [])
          return [...mySkills, ...currentSkils]
        }
        return mySkills
      },
      []
    )
  }
  console.log(allSkills[1]);
  return (
    <Layout title={`Skills`} bgClassName={`skill`} fixedMenuPosition={true}>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Skill
        skills={allSkills}
        type="scrollable"
        title="Skills"
        description="These are the skills that I have acquired through my years of
            experience working as a software developer, the order is based on
            the ones I like most and or I have used."
        transitionStatus={transitionStatus}
      />
    </Layout>
  )
}

export const query = graphql`
query {
    allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          skills {
            title
            image {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
`
