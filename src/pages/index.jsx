import React from 'react';
import { graphql } from 'gatsby';

import ArchitectOfTheDay from '../components/Home/ArchitectOfTheDay/ArchitectOfTheDay';
import Layout from '../components/Layout/Layout';

const IndexPage = (props) => {
  const { data: { allContentfulArchitect: { edges } } } = props;

  const { node: architect } = edges.find(e => e.node.authorOfTheDay);

  return (
    <Layout>
      <div className="container intro">
        <h1>Архитекторы Беларуси</h1>
      </div>
      <div className="container border-section">
        <p>здесь будет описание сайта</p>
      </div>
      <div className="container border-section">
        <h2>Архитектор дня</h2>
        <ArchitectOfTheDay architect={architect} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const arcQuery = graphql`
{
  allContentfulArchitect(filter: {node_locale: {in: "en-US"}}) {
    edges {
      node {
        name
        vita
        authorOfTheDay
        path
        id
        img {
          file {
            url
          }
        }
      }
    }
  }
}
`;
