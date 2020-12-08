import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const MapView = ({ staticIcons, icon }) => (
  <>
    <MapContainer
      center={[51.11535749698708, 17.034426774577256]}
      zoom={7}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {staticIcons.map(({ id, location }) => (
        <Marker position={location.split(',')} icon={icon} key={id}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </>
);
