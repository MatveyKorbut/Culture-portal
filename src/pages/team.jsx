import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout/Layout';
import Person from '../components/Team/Person/Person';

import classes from './team.module.css';

const Team = ({ data: { allContentfulDeveloper: { edges } } }) => {
  const team = edges.map(({ node }) => <Person key={node.link} {...node} />);
  const { t } = useTranslation();
  return (
    <Layout>
      <h2 style={{
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
      >
        {t('team')}
      </h2>
      <div className={classes.teamContainer}>
        {team}
      </div>
    </Layout>
  );
};

export const teamQuery = graphql`
{
  allContentfulDeveloper {
    edges {
      node {
        name
        avatar  {
          fluid {
            src
          }
        }
        link
        email
      }
    }
  }
}
`;

export default Team;
