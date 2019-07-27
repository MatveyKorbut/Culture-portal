/* eslint consistent-return: 0 */
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const arcPage = path.resolve('src/components/ArchitectPage/architectPage.jsx');

  return graphql(`{
    allContentfulArchitect(filter: {node_locale: {in: "en-US"}}) {
      edges {
        node {
          name
          date
          birthPlace
          authorOfTheDay
          videoId
          vita
          path
          img {
            file {
              url
            }
          }
          id
          timelineData {
            internal {
              content
            }
          }
          work {
            internal {
              content
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
            context: {
              node,
            },
          });
        }
      });
    });
};
