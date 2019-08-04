/* eslint consistent-return: 0 */
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const arcPage = path.resolve('src/components/ArchitectPage/architectPage.jsx');

  return graphql(`{
    allContentfulArchitectBy {
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
    allContentfulArchitectEn {
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
    allContentfulArchitect {
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
      const createPageFromEdges = ({ node }) => {
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
      };
      res.data.allContentfulArchitect.edges.forEach(createPageFromEdges);
      res.data.allContentfulArchitectEn.edges.forEach(createPageFromEdges);
      res.data.allContentfulArchitectBy.edges.forEach(createPageFromEdges);
    });
};
