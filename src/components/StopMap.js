import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// import StopsAPI from "../api/stops";

export const StopMap = (props) => {
    const mapPositions = [49.8952, -97.1379];
    const [ stopPositions, setStopPositions ] = useState([]);

    useEffect(() => {
        console.log("Fetch nearby stops => ", mapPositions);
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
        </MapContainer>
    )
}

export default StopMap