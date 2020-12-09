import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  const markers = [

    { markerOffset: -15, name: "La Paz", coordinates: [-8.80529, 115.11702], r:20},
    { markerOffset: 25, name: "Brasilia", coordinates: [-0.96185, 100.35756], r:30},

  ];

const MapChart = () => {
  return (
    <div>
      <ComposableMap>
        
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} fill={"#bbb"} geography={geo} />
              ))
            }
          </Geographies>

        {markers.map(({ name, coordinates, markerOffset, r }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={r} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
