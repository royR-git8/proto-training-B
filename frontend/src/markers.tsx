
import {

  Marker,
  Popup,
  
} from "react-leaflet";


import "leaflet/dist/leaflet.css";
import type { City } from "./types";
// Fix default Leaflet marker icons in Vite/Webpack
type markerProps={
  cities: Array<City>
}
        export function Markers({cities}: markerProps){
        return (<>{cities.map((city) => (
          <Marker
            key={city.id}
            position={city.position}
            title={city.name}
            alt={city.name}
            riseOnHover={true}
          >
            <Popup>
              <div>
                <h3>{city.name}</h3>
                <p>{city.description}</p>
                <small>
                  Coordinates: {city.position.join(", ")}
                </small>
           
              </div>
            </Popup>
          </Marker>
        ))}
        </>
    )}
    export default Markers;