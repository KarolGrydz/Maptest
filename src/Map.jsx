import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon, icons, getLocations } from './getIcons';

export const Map = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const locat = getLocations();
    console.log(locat);
  }, []);

  return (
    <div>
      <MapContainer
        center={[51.11535749698708, 17.034426774577256]}
        zoom={7}
        style={{ height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {icons.map(({ id, position }) => (
          <Marker position={position} icon={icon} key={id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
