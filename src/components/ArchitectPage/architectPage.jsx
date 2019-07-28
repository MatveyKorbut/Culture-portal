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
    const {
      name,
      img,
      vita,
      date,
      timelineData,
      work,
    } = this.data;
    return (
      <Layout>
        <div className={style.Container}>
          <Person name={name} img={img} vita={vita} date={date} />
          <Timeline timelineData={timelineData} />
          <Activity />
          <Video />
          <Map work={work}/>
          <Gallery />
        </div>
      </Layout>
    );
  }
}

export default Architect;
