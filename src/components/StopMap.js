import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const StopMap = (props) => {
    const mapPositions = [49.8952, -97.1379];

    return (
        <MapContainer
            className="map"
            center={[mapPositions[0], mapPositions[1]]}
            zoom={15}
        >
            <TileLayer
                attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
        </MapContainer>
    )
}

export default StopMap