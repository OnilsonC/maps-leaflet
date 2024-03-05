import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function Mapa() {
  const [estados, setEstados] = useState(null);
    
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v3/malhas/estados/GO?formato=application/vnd.geo+json')
      .then(response => response.json())
      .then(data => {
        setEstados(data);
      });
  }, []);

  return (
    <MapContainer center={[-15.788, -48.8797]} zoom={7} style={{ height: '85vh', width: '85vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {estados && <GeoJSON data={estados} />}
    </MapContainer>
  );
};

export default Mapa;

//malha Brasil  
  //https://servicodados.ibge.gov.br/api/v2/malhas/BR?formato=application/vnd.geo+json

  //malha Goiânia
  //https://servicodados.ibge.gov.br/api/v3/malhas/municipios/5208707?formato=application/vnd.geo+json