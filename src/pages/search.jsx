import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import classes from './search.module.css';
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
      <Link to={node.path} key={node.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem button>
          <div style={{ width: 45, height: 45, marginRight: 15, overflow: 'hidden' }}>
            <img src={node.img.file.url} alt={node.name} />
          </div>
          <ListItemText primary={node.name} />
        </ListItem>
      </Link>
    ));
    const filteredLinks = edges.filter(({ node }) => node.name.includes(searchKey))
      .map(({ node }) => (
        <Link to={node.path} key={node.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={node.name} />
          </ListItem>
        </Link>
      ));
    return (
      <Layout>
        <section className={classes.box_centrified}>
          <div className={classes.search_container}>
            <h2>LIST OF ARCHITECTS</h2>
            <input
              className={classes.search_container__search_input}
              type="search"
              placeholder="Search for architects..."
              onInput={this.handleInput}
              ref={(node) => { this.searchInput = node; }}
            />
            <div className={classes.search_container__list}>
              <List component="nav">
                {searchKey ? filteredLinks : links}
              </List>
            </div>
          </div>
          <Link to="/" className={classes.buttonStyled_link}>Go back to the homepage</Link>
        </section>
      </Layout>
    );
  }
}

export default Search;

export const arcQuery = graphql`
{
  allContentfulArchitect(filter: {node_locale: {in: "en-US"}}) {
    edges {
      node {
        name
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
