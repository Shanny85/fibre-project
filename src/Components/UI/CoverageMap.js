import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

const CoverageMap = () => {
    useEffect(() => {
        // This code will run when the component mounts

        // Create the map
        let map = L.map('map').setView([-30.5595, 22.9375], 6); // Example coordinates for South Africa

        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add a marker
        let marker = L.marker([-30.5595, 22.9375]).addTo(map);
        marker.bindPopup("This is South Africa").openPopup();
    }, []); // The empty dependency array ensures this code runs once when the component mounts

    return (
        <div id="map" className="h-96"></div>
    );
}

export default CoverageMap;
