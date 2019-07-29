import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 45, height: 45) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `);

  return <Img fixed={data.file.childImageSharp.fixed} />;
};

export default Image;
