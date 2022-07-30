import React,{useState,useCallback,useRef,useMemo} from "react";
import { MapContainer, TileLayer,Marker,Popup,useMapEvents,Circle,CircleMarker,Polyline,ScaleControl} from 'react-leaflet';
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
// import logo from './logo.svg';
// import 'leaflet/dist/leaflet.css';
import './App.css';
import { map } from "leaflet";
import Geoman from "./Geoman";


// function LocationMarker() {
//   const redOptions = { color: 'red' }
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Circle center={position} pathOptions={redOptions} radius={200}  />
//       <ScaleControl imperial={false}/>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }

const center = {
  lat: 51.505,
  lng: -0.09,
}

// function DraggableMarker() {
//   const [draggable, setDraggable] = useState(false)
//   const [position, setPosition] = useState(center)
//   const markerRef = useRef(null)
//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current
//         if (marker != null) {
//           setPosition(marker.getLatLng());
//           let lat = marker.getLatLng().lat;
//           let log = marker.getLatLng().lng;
//         }
//       },
//     }),
//     [],
//   )
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d)
//   }, [])

//   return (
//     <>
//     <Marker
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={position}
//       ref={markerRef}>
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {draggable
//             ? 'Marker is draggable'
//             : 'Click here to make marker draggable'}
//         </span>
//       </Popup>
//     </Marker>
//     </>
//   )
// }


function App() {
  // const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        document.getElementById('latitude').value = marker.getLatLng().lat;
        document.getElementById('longitude').value = marker.getLatLng().lng;
      },
      //   const marker = markerRef.current
      //   if (marker != null) {
      //     // setPosition(marker.getLatLng());
      //      marker.getLatLng().Lat;
      //      marker.getLatLng().Lng;
      //   }
      // },
    }),
    [],
  )
  const draggable=true;
  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d)
  // }, [])
  // const center = [51.505, -0.09];
  // const polygon = [
  //   [51.505, -0.09],
  // [51.51, -0.1],
  // [51.51, -0.12],
  // ];
  // const redOptions = { color: 'red' }
  return (
    <>
    <form>
      <label for="latitude">Latitude:</label>
      <input id="latitude" type="text" />
      <label for="longitude">Longitude:</label>
      <input id="longitude" type="text" />
    </form>
    <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={18} scrollWheelZoom={true} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
        {/* <span onClick={toggleDraggable}></span> */}
      {/* <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup> */}
    </Marker>
        {/* <LocationMarker /> */}
        {/* <Geoman/> */}
        {/* <Circle center={center} pathOptions={redOptions} radius={200} />
        <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
      <Popup>Popup in CircleMarker</Popup>
    </CircleMarker>
    <Polyline pathOptions={redOptions} positions={polygon} /> */}
        {/* <Marker position={[51.505, -0.09]}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker> */}
        </MapContainer>
        </div>
    </>
  );
}

export default App;
