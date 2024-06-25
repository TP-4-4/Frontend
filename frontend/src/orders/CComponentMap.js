import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CComponentPage.css';
import close from '../img/CloseOr.png';

const mapMarkerIcon = new L.Icon({
    iconUrl: 'https://svgshare.com/i/16dt.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const deliveryMarkerIcon = new L.Icon({
    iconUrl: 'https://svgshare.com/i/16d6.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const CComponentMap = (props) => {
    const [startCoord, setStartCoord] = useState(null);
    const [endCoord, setEndCoord] = useState(null);
    const [routeCoordinates, setRouteCoordinates] = useState([]);
    const [deliveryCoord, setDeliveryCoord] = useState(null);

    useEffect(() => {
        const loadRoute = async () => {
            try {
                const response = await fetch('/get_route_data');
                if (response.ok) {
                    const data = await response.json();
                    const { start_coord, end_coord, routeCoordinates, delivery_coord } = data;

                    if (start_coord && end_coord && routeCoordinates) {
                        setStartCoord(start_coord);
                        setEndCoord(end_coord);
                        setRouteCoordinates(routeCoordinates);
                        setDeliveryCoord(delivery_coord);
                    }
                } else {
                    console.error('Failed to load route data');
                }
            } catch (error) {
                console.error('Error loading route data:', error);
            }
        };

        const intervalId = setInterval(loadRoute, 5000);

        loadRoute(); // Initial load

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div >

            <MapContainer center={[51.670833, 39.214167]} zoom={12} style={{ width: '100%', height: '500px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {startCoord && <Marker position={startCoord} icon={mapMarkerIcon} />}
                {endCoord && <Marker position={endCoord} icon={mapMarkerIcon} />}
                {routeCoordinates.length > 0 && <Polyline positions={routeCoordinates} color='#F77900' />}
                {deliveryCoord && <Marker position={deliveryCoord} icon={deliveryMarkerIcon} />}
            </MapContainer>
        </div>
    );
};

export default CComponentMap;
