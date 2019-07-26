import React from 'react';

import Layout from '../components/Layout/Layout';

import Person from '../components/Team/Person/Person';

const team = [
  {
    name: 'Vasya',
    link: 'profile',
    avatar: '',
  },
  {
    name: 'Petya',
    link: 'profile',
    avatar: '',
  },
  {
    name: 'Masha',
    link: 'profile',
    avatar: '',
  },
  {
    name: 'Kostya',
    link: 'profile',
    avatar: '',
  },
  {
    name: 'Kolya',
    link: 'profile',
    avatar: '',
  },
];

const Team = () => (
  <Layout>
    <h1>НАША КОМАНДА</h1>
    <div>
      {team.map(person => <Person {...person} />)}
    </div>
  </Layout>
);

export default Team;
