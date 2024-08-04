import { MAP_API_KEY } from "../../constants";
import { MapViewProps } from "./types";

const MapView= ({ searchText }: MapViewProps) => {
  return (
    <div className="card rounded-0" style={{height: "100%"}}>
        <iframe
            width="100%"
            height="100%"
            style={{border: "0"}}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src={
              `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}
              &q=${searchText.replace(' ', '+')}`
            }>
        </iframe>
    </div>
  )
}

export default MapView;