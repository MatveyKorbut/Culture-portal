import React from 'react';
import { graphql } from 'gatsby';

import ArchitectOfTheDay from '../components/Home/ArchitectOfTheDay/ArchitectOfTheDay';
import Layout from '../components/Layout/Layout';

const IndexPage = (props) => {
  const { data: { allContentfulArchitect: { edges } } } = props;

  const { node: architect } = edges.find(e => e.node.authorOfTheDay);

  return (
    <Layout>
      <h1>HOME PAGE</h1>
      <p>
        Длительный период отсутствия собственной государственности и сохранение консервативных,
        феодальных по форме политических установок существенно замедлили развитие
        культуры Белоруссии и формирование белорусской нации.
        Земли Белоруссии веками были включены в другие государственно-национальные образования,
        что значительно повлияло на стиль архитектуры в стране.
        Уже в начале XIV века белорусские земли входят в состав
        Великого княжества Литовского, затем в состав Речи Посполитой.
      </p>
      <h2>Архитектор дня</h2>
      <ArchitectOfTheDay architect={architect} />
    </Layout>
  );
};

export default IndexPage;

export const arcQuery = graphql`
{
  allContentfulArchitect {
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
