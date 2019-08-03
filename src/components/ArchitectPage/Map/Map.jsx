import React from 'react';
import idGenerator from 'react-id-generator';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './leaflet.css';

import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    margin: '10px',
    width: '100%',
    height: '400px',
    maxWidth: '1000px',
    textAlign: 'center',
  },
  text: {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
}));

const map = ({ work }) => {
  const data = Object.values(JSON.parse(work.internal.content));

  const Points = data.filter(place => place.width && place.length);

  const Markers = Points.map(places => (
    <Marker key={idGenerator()} position={[places.width, places.length]}>
      <Popup>{places.title}</Popup>
    </Marker>
  ));

  const Bounds = Points.reduce((placesArr, places) => {
    placesArr.push([places.width, places.length]);
    return placesArr;
  }, []);

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Map
        bounds={Bounds}
        center={[Points[0].width, Points[0].length]}
        zoom={6}
        maxZoom={18}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {Markers}
      </Map>
    </Paper>
  );
};

export default map;
