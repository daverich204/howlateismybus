import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import StopsAPI from "../api/stops";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// const StopIcon = (
//   L.Icon({
//     iconUrl: markerIcon,
//     shadowUrl: iconShadow,
//   })
// );

export const StopMap = (props) => {
    const mapPositions = [49.8952, -97.1379];
    const [ nearbyStops, setNearbyStops ] = useState([]);

    useEffect(async () => {
        const stops_nearby = await StopsAPI.getNearbyStops({lat: mapPositions[0], lon: mapPositions[1], distance: 1000 });
        const { stops = [] } = stops_nearby;

        setNearbyStops(stops);
    }, [mapPositions]);

    return (
        <MapContainer
            className="map"
            center={[mapPositions[0], mapPositions[1]]}
            zoom={15}
        >
            <TileLayer
                attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {(nearbyStops.map((nearbyStop) => {
                const { centre = {}, name, key } = nearbyStop;
                const { geographic = {} } = centre;
                const { latitude, longitude } = geographic;

                return (
                  <Marker key={key}
                          position={[latitude, longitude]}
                          // icon={<StopIcon />}
                  >
                    <Popup>
                        {key}: {name}
                        <br />
                    </Popup>
                  </Marker>
                );
            }))}
        </MapContainer>
    )
}

export default StopMap