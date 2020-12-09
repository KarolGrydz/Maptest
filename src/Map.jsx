import React, { useEffect, useState } from 'react';
import { icon, staticIcons, getLocations } from './getIcons';
// import { MapView } from './MapView';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const locat = await getLocations();
      setLocations(locat);
    }
    fetchData();
  }, []);

  return (
    <>
      {locations.length && (
        <MapContainer
          center={[51.11535749698708, 17.034426774577256]}
          zoom={7}
          style={{ height: '100vh' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(({ location, id }) => (
            // <>{console.log(location.length ? location.split(',') : null)}</>
            <>
              {location.length && (
                <Marker position={location.split(',')} icon={icon} key={id}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              )}
            </>
          ))}
        </MapContainer>
      )}
    </>
  );
};
