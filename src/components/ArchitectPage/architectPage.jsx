import React, { Component } from 'react';

import Layout from '../Layout/Layout';

import Activity from './Activity/Activity';
import Gallery from './Gallery/Gallery';
import Map from './Map/Map';
import Person from './Person/Person';
import Timeline from './Timeline/Timeline';
import Video from './Video/Video';

import style from './style.module.css';
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
        <div className={style.Container}>
          <h2>
            {name}
          </h2>
          <Person />
          <Timeline />
          <Activity />
          <Video />
          <Map />
          <Gallery />
        </div>
      </Layout>
    );
  }
}

export default Architect;
