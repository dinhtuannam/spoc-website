'use client';

import React, { useRef, useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
import L, { Map as LeafletMap } from 'leaflet';

const Map: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<LeafletMap | null>(null);
    const center = { lng: 13.338414, lat: 52.507932 };
    const [zoom] = useState<number>(12);

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        if (mapContainer.current) {
            map.current = new L.Map(mapContainer.current, {
                center: L.latLng(center.lat, center.lng),
                zoom: zoom,
            });

            // Create a MapTiler Layer inside Leaflet
            const mtLayer = new MaptilerLayer({
                // Get your free API key at https://cloud.maptiler.com
                apiKey: 'SBPCejABSXI44lOalian',
            });

            mtLayer.addTo(map.current);
        }

        return () => {
            // Cleanup map instance on component unmount
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [center, zoom]);

    return (
        <div className={styles.mapWrap}>
            <div ref={mapContainer} className={styles.map} />
        </div>
    );
};

export default Map;
