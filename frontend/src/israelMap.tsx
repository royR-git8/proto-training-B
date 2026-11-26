import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  
} from "react-leaflet";
import Markers from "./markers";
import type { City } from "./types";


// Israel map configuration
const ISRAEL_CENTER: [number, number] = JSON.parse(import.meta.env.VITE_MAP_CENTER!);

type mapProps={
      cities: Array<City>
    
}
const styles = { height: "35rem", width: "100%" }
export function IsraelMap({cities}: mapProps){
    return( <><MapContainer
            center={ISRAEL_CENTER}
            zoom={7}
            minZoom={4}
            maxZoom={15}
            scrollWheelZoom={true}
            zoomControl={true}
            doubleClickZoom={true}
            dragging={true}
            touchZoom={true}
            boxZoom={true}
            keyboard={true}
           
            style={styles} 
          >
            <TileLayer
              url={import.meta.env.VITE_MAP_URL}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minZoom={7}
              maxZoom={19}
            />
    
            <Markers cities= {cities} />
    
          </MapContainer></>);
}
export default IsraelMap