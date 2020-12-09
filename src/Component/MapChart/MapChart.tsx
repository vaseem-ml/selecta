import React, { useRef } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

const MapChart = () => {

  const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  
  return (
    <>

      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>

    </>
  );
}

export default MapChart;