/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
      const fileNode = getNode(node.parent)
      console.log(`\n`, fileNode.relativePath)
    }
  }
// // const path = require(`path`)
// const { default: Grid } = require("./src/components/skillgrid.js")



// createPage({
//     path: `/Work`,
//     component: path.resolve(Grid),
//     context: {}
// })
