import React from 'react';
import { graphql } from 'gatsby';

import ArchitectOfTheDay from '../components/Home/ArchitectOfTheDay/ArchitectOfTheDay';
import Layout from '../components/Layout/Layout';

const IndexPage = (props) => {
  const { data: { allContentfulArchitectEn: { edges } } } = props;

  const { node: architect } = edges.find(e => e.node.authorOfTheDay);

  return (
    <Layout>
      <h2>ARCHITECTURE OF BELARUS</h2>
      <p>
        A long period of lack of their own statehood and the preservation of conservative
        feudal in the form of political attitudes significantly slowed down the development of
        culture of Belarus and the formation of the Belarusian nation.
        The lands of Belarus for centuries have been included in other state-national entities,
        which significantly influenced the style of architecture in the country.
        Already at the beginning of the XIV century, Belarusian lands are part of
        Grand Duchy of Lithuania, then to the Commonwealth.
      </p>
      <p>
        Since the end of the XVIII century,
        part of the lands of Belarus was subordinated to the Russian Empire.
      </p>
      <p>
        Two powerful effects on the artistic and stylistic situation in the country are noted:
      </p>
      <ul>
        <li>Old Russian influence (XI-XIII centuries);</li>
        <li>Western European influence (from the XIV to the XIX century).</li>
      </ul>
      <p>
        Stalin &apos s decision to give part of the land of Belarus
        with the city of Vilna to Lithuania deprived the country
        a significant share of the architectural heritage related to the Gothic and Renaissance,
        which were the common cultural heritage of the Lithuanian and Belarusian peoples.
        Moreover, this deprived Belarus of its ancient historical capital.
      </p>
      <h2 style={{
        textAlign: 'center',
        margin: 5,
      }}
      >
        Architect Of The Day
      </h2>
      <ArchitectOfTheDay architect={architect} />
    </Layout>
  );
};

export default IndexPage;

export const arcQuery = graphql`
{
  allContentfulArchitectEn {
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
