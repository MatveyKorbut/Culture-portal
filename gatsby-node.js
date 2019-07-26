/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const arcPage = path.resolve('src/components/newPage.jsx');

  return graphql(`{
    allContentfulArchitect {
      edges {
        node {
          id
          name
          date
          birthPlace
          authorOfTheDay
          videoId
          vita
          path
          timelineData {
            _1 {
              text
              date
            }
            _2 {
              text
              date
            }
            _3 {
              text
              date
            }
            _4 {
              date
              text
            }
            _5 {
              date
              text
            }
            _6 {
              date
              text
            }
            _7 {
              date
              text
            }
            _8 {
              date
              text
            }
            _9 {
              date
              text
            }
            _10 {
              date
              text
            }
            _11 {
              date
              text
            }
          }
          img {
            file {
              url
            }
          }
        }
      }
    }
  }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      const hash = {};
      res.data.allContentfulArchitect.edges.forEach(({ node }) => {
        if (!hash[node.path]) {
          hash[node.path] = true;
          createPage({
            path: node.path,
            component: arcPage,
          });
        }
      });
    });
};