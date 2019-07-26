import React, { Component } from 'react';

import Layout from '../Layout/Layout';

// в пропсах приходят все данные, их структуру скинул в телегу
class Architect extends Component {
  constructor(props) {
    super(props);
    const {
      pathContext: {
        node,
      },
    } = props;
    this.data = node;
  }

  render() {
    const { name } = this.data;
    return (
      <Layout>
        <h2>
          {name}
        </h2>
      </Layout>
    );
  }
}

export default Architect;
