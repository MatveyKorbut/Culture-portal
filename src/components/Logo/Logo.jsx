import { Link } from 'gatsby';
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

  return (
    <Link to='/' className='logo'><Img fixed={data.file.childImageSharp.fixed} /></Link>
  );
};

export default Image;
