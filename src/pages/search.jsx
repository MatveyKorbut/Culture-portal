import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: undefined,
    };
    this.handleInput = () => {
      this.setState({
        searchKey: this.searchInput.value,
      });
    };
  }

  render() {
    const { data: { allContentfulArchitect: { edges } } } = this.props;
    const { searchKey } = this.state;
    const links = edges.map(({ node }) => (
      <li key={node.id}>
        <Link to={node.path}>
          {node.name}
        </Link>
      </li>
    ));
    const filteredLinks = edges.filter(({ node }) => node.name.includes(searchKey))
      .map(({ node }) => (
        <li key={node.id}>
          <Link to={node.path}>
            {node.name}
          </Link>
        </li>
      ));
    return (
      <Layout>
        <h1>LIST OF ARCHITECTS</h1>
        <input
          type="search"
          onInput={this.handleInput}
          ref={(node) => { this.searchInput = node; }}
        />
        <ul>
          {searchKey ? filteredLinks : links}
        </ul>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }
}

export default Search;

export const arcQuery = graphql`
{
  allContentfulArchitect {
    edges {
      node {
        name
        path
        id
      }
    }
  }
}
`;
