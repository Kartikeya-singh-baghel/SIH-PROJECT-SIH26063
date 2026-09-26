import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const stations = [
  {
    name: "Maitri Research Station",
    country: "India",
    latitude: -70.76,
    longitude: 11.83,
    description: "Indian research station located in Antarctica."
  },
  {
    name: "Bharati Research Station",
    country: "India",
    latitude: -69.41,
    longitude: 76.19,
    description: "Indian Antarctic research station used for scientific research."
  },
  {
    name: "McMurdo Station",
    country: "USA",
    latitude: -77.84,
    longitude: 166.67,
    description: "Major scientific research station in Antarctica."
  }
];

function PolarMap() {
  return (
    <div className="map-page">

      <div className="map-header">
        <p className="section-label">EXPLORE THE POLAR REGIONS</p>

        <h1>Interactive Polar Map</h1>

        <p>
          Explore important research stations and locations
          across Antarctica.
        </p>
      </div>

      <div className="map-container">

        <MapContainer
          center={[-75, 30]}
          zoom={3}
          scrollWheelZoom={true}
          style={{ height: "550px", width: "100%" }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((station) => (

            <CircleMarker
              key={station.name}
              center={[
                station.latitude,
                station.longitude
              ]}
              radius={9}
              pathOptions={{
                color: "#66d9ff",
                fillColor: "#66d9ff",
                fillOpacity: 0.8
              }}
            >

              <Popup>
                <strong>{station.name}</strong>
                <br />
                <br />
                Country: {station.country}
                <br />
                <br />
                {station.description}
              </Popup>

            </CircleMarker>

          ))}

        </MapContainer>

      </div>

    </div>
  );
}

export default PolarMap;