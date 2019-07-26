import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';

const Search = () => (
  <Layout>
    <h1>LIST OF ARCHITECTS</h1>
    <span>Здесь будет компонент с фильтруемым списком архитекторов</span>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Search;
