'use client';

import React, { useRef, useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import mapIcon from '../../../public/icons/map-pin.svg';
import styles from './map.module.css';
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
import L, { Map as LeafletMap, Marker, Popup } from 'leaflet';

const Map: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<LeafletMap | null>(null);
    const markerRef = useRef<Marker | null>(null);

    const center = { lng: 106.665532, lat: 10.754365 }; // Vị trí trung tâm bản đồ
    const markerPosition = { lng: 106.665532, lat: 10.754365 }; // Vị trí của Marker
    const [zoom] = useState<number>(16);

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        if (mapContainer.current) {
            // Khởi tạo bản đồ
            map.current = new L.Map(mapContainer.current, {
                center: L.latLng(center.lat, center.lng),
                zoom: zoom,
            });

            // Thêm lớp bản đồ từ MapTiler
            const mtLayer = new MaptilerLayer({
                apiKey: 'SBPCejABSXI44lOalian',
            });
            mtLayer.addTo(map.current);

            // const customDivIcon = L.divIcon({
            //     className: 'custom-icon', // Class để định dạng CSS
            //     html: '<div style="background: blue; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">SPOC</div>',
            //     iconSize: [40, 40], // Kích thước của icon
            //     iconAnchor: [20, 40], // Điểm neo (gốc của icon)
            //     popupAnchor: [0, -40], // Điểm xuất hiện popup
            // });

            const icon = L.icon({
                iconUrl: mapIcon.src, // Đường dẫn đến hình ảnh
                iconSize: [40, 40], // Kích thước biểu tượng (width, height)
                iconAnchor: [20, 40], // Điểm neo (điểm gốc của icon)
                popupAnchor: [0, -40], // Điểm xuất hiện popup
            });

            // Thêm Marker vào bản đồ
            markerRef.current = L.marker([markerPosition.lat, markerPosition.lng], { icon: icon }).addTo(map.current);

            // Gắn Popup cho Marker
            markerRef.current.bindPopup(`<b>Vị trí của SPOC</b>`);
        }

        return () => {
            // Cleanup map instance on component unmount
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [center, zoom, markerPosition.lat, markerPosition.lng]);

    return (
        <div className={styles.mapWrap}>
            <div ref={mapContainer} className={styles.map} />
        </div>
    );
};

export default Map;
