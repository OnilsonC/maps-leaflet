import { MapContainer, TileLayer } from 'react-leaflet';
import "./App.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { useEffect } from 'react';

async function MalhaIbge() {
  
  try {
    const request = await fetch("https://servicodados.ibge.gov.br/api/v3/malhas/estados/GO?formato=application/vnd.geo+json");
    const response = await request.json();

    const myMap = L.map('map');
    
    L.geoJSON(response).addTo(myMap);

  } catch (error) {
    console.log(error);
  }
}

function App() {
useEffect(() => {
  MalhaIbge();
}, []);
  return (
    <MapContainer id="map" center={[-16.130262, -49.87793]} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"/>
    </MapContainer>
  );
}

export default App;
