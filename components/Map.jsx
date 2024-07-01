"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { position } from "@/portfolio";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = position;
  const [zoom] = useState(10);

  useEffect(() => {
    if (map.current) return; 

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });

    const mtLayer = new MaptilerLayer({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    }).addTo(map.current);

  }, [center.lng, center.lat, zoom]);
    console.log("🚀 ~ useEffect ~ mapContainer:", mapContainer)

  return (
    <div className="mapWrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
