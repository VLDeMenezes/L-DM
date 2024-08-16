import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const Mapa = () => {
  //-27.365792, -55.891352

  return (
    <>
      <MapContainer center={{ lat: -27.365792, lng: -55.891352 }} zoom={20}>
        <TileLayer
          attribution="&copy; "
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-27.365792, -55.891352]}>
          <Popup>
            Estudio Juridico Leyria & De Menezes. <br />
            <a href="https://maps.app.goo.gl/QxMoNyeA5RuoUvZ88" target="_blank">
              Al darle click lo llevará a Google Maps.
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Mapa;
