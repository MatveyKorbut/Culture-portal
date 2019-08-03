import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Person from '../components/Team/Person/Person';

import classes from './team.module.css';

class Team extends PureComponent {
  render() {
    const { data: { allContentfulDeveloper: { edges } } } = this.props;
    const team = edges.map(({ node }) => <Person key={node.link} {...node} />);
    return (
      <Layout>
        <h1 style={{
          textAlign: 'center',
        }}
        >
          НАША КОМАНДА
        </h1>
        <div className={classes.teamContainer}>
          {team}
        </div>
      </Layout>
    );
  }
}

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
