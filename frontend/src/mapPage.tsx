
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import type { City } from "./types";
import IsraelMap from "./israelMap";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


// Cities data

 const cities: Array<City> = [
  {
    id: 1,
    name: "Tel Aviv",
    description: "The cultural and economic center of Israel.",
    position: [32.0853, 34.7818],
  },
  {
    id: 2,
    name: "Jerusalem",
    description: "The capital of Israel.",
    position: [31.7683, 35.2137],
  },
  {
    id: 3,
    name: "Haifa",
    description: "A major port city in northern Israel.",
    position: [32.794, 34.9896],
  },
  {
    id: 4,
    name: "Be'er Sheva",
    description: "The largest city in the Negev.",
    position: [31.2518, 34.7913],
  },
];
// Main map component
function MapPage() {
//  const { employees } = useEmployees({ query: "" });
  return (
    <div className="map-wrapper">
      <IsraelMap cities={cities} />
    </div>
  );
}

 export default MapPage//Kfir - no export default. If you aren't sure why find out what default export does and think on why it isn't advised
