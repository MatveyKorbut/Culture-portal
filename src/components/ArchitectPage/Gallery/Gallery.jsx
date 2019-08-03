import React from 'react';

import AwesomeSlider from 'react-awesome-slider';

import idGenerator from 'react-id-generator';

import 'react-awesome-slider/dist/styles.css';

import style from './style.module.css';


const gallery = ({ work }) => {
  const data = Object.values(JSON.parse(work.internal.content));
  const worksImg = data.map(el => (
    <div key={idGenerator()} data-src={el.img} />
  ));
  return (
    <AwesomeSlider className={style.Container}>
      {worksImg}
    </AwesomeSlider>
  );
};
export default gallery;
