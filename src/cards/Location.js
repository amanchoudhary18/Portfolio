import React, { useState, useEffect, useRef } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import memoji from "../assets/images/memoji-1.png";
import { useTheme } from "../context/ThemeContext";

const Location = () => {
  const { isDarkMode } = useTheme();
  const [lat, lng] = [12.913743310295336, 77.66478519613979];
  const [zoom, setZoom] = useState(13);
  const [isAnimating, setIsAnimating] = useState(false);
  const mapRef = useRef(null);

  const [circleRadius, setCircleRadius] = useState(40);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCircleRadius((prevRadius) => (prevRadius === 40 ? 50 : 40));
      }, 350);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const circleLayer = {
    id: "circle-layer",
    type: "circle",
    paint: {
      "circle-radius": circleRadius,
      "circle-color": "#007bff",
      "circle-opacity": 0.2,
    },
  };

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => {
        setIsAnimating(false);
        setCircleRadius(40);
      }}
    >
      <Map
        initialViewState={{
          latitude: lat,
          longitude: lng,
        }}
        mapStyle={
          isDarkMode
            ? "mapbox://styles/mapbox/navigation-night-v1"
            : "mapbox://styles/mapbox/streets-v11"
        }
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        className="w-full h-full"
        scrollZoom={false}
        dragPan={false}
        zoom={zoom}
        ref={mapRef}
      >
        <Source
          id="marker-circle"
          type="geojson"
          data={{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
          }}
        >
          <Layer {...circleLayer} />
        </Source>

        <Marker latitude={lat} longitude={lng}>
          <img src={memoji} alt="memoji" className="w-[30px] h-[40px]" />
        </Marker>

        <div className="absolute bottom-2 left-2">
          {zoom < 14 && (
            <button
              onClick={() => handleZoomChange(zoom + 3)}
              className="w-8 h-8 text-xl bg-white rounded-full text-[#0d1117]"
            >
              +
            </button>
          )}
        </div>
        <div className="absolute bottom-2 right-1">
          {zoom > 2 && (
            <button
              onClick={() => handleZoomChange(zoom - 2)}
              className="w-8 h-8 text-xl bg-white rounded-full text-[#0d1117]"
            >
              -
            </button>
          )}
        </div>
      </Map>
    </div>
  );
};

export default Location;
