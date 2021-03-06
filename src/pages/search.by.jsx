import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    const { data: { allContentfulArchitectBy: { edges } } } = this.props;
    const { searchKey } = this.state;
    const link = ({ node }) => (
      <Link to={node.path} key={node.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem button>
          <div style={{
            width: 45, height: 45, marginRight: 15, overflow: 'hidden',
          }}
          >
            <img src={node.img.file.url} alt={node.name} />
          </div>
          <ListItemText primary={node.name} />
        </ListItem>
      </Link>
    );
    const links = edges.map(link);
    const filteredLinks = edges
      .filter(({ node }) => node.name.toLowerCase()
        .includes(searchKey ? searchKey.toLowerCase() : searchKey))
      .map(link);
    const isEmpty = filteredLinks.length === 0 && searchKey;
    return (
      <Layout>
        <section className={classes.box_centrified}>
          <div className={classes.search_container}>
            <h2>СПИС АРХИТЭКТАРАУ</h2>
            <input
              className={classes.search_container__search_input}
              type="search"
              placeholder="Шукаць архитэктарау..."
              onInput={this.handleInput}
              ref={(node) => { this.searchInput = node; }}
            />
            <div className={classes.search_container__list}>
              <List component="nav">
                {searchKey ? filteredLinks : links}
                {isEmpty ? 'Архитэктары не найдзены' : ''}
              </List>
            </div>
          </div>
          <Link to="/by" className={classes.buttonStyled_link}>Вярнуцца да галоунай</Link>
        </section>
      </Layout>
    );
  }
}

export default Search;

export const arcQuery = graphql`
{
  allContentfulArchitectBy {
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
