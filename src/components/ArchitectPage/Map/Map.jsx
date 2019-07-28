import React, { Component } from 'react';
import idGenerator from 'react-id-generator';
import './leaflet.css';

import style from './style.module.css';

class SimpleMap extends Component {
  render() {
    const LeafletMap = require('react-leaflet').Map;
    const TileLayer = require('react-leaflet').TileLayer;
    const Marker = require('react-leaflet').Marker;
    const Popup = require('react-leaflet').Popup;

    const data = Object.values(JSON.parse(this.props.work.internal.content));

    if (LeafletMap && TileLayer && Marker && Popup) {
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

      return (
        <div className={style.Container}>
          <LeafletMap
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
          </LeafletMap>
        </div>
      );
    }
    return null;
  }
}

export default SimpleMap;
