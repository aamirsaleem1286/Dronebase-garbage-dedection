// "use client";

// import React, { useEffect, useState } from "react";
// import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { FaLocationDot } from "react-icons/fa6";
// import { Lato } from "next/font/google";

// import SpinLoading from "@/components/loading/SpinLoading";

// // Define container style for the Google Map
// const containerStyle = {
//     marginLeft: "15px",
//     marginRight: "15px",
//     marginTop: "-15px",
//     height: "76vh",
//     borderRadius: "20px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// };

// const lato = Lato({ weight: "400", subsets: ["latin"] });

// const GoogleMapsComponent: React.FC = () => {
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
//     });

//     const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
//     const [wasteDumpLocations, setWasteDumpLocations] = useState<any[]>([]);
//     const [selectedMarker, setSelectedMarker] = useState<any | null>(null);

//     useEffect(() => {
//         if (!isLoaded) return;

//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setUserLocation({ lat: latitude, lng: longitude });
//                 },
//                 (error) => {
//                     console.error("Error getting user location:", error);
//                 },
//             );
//         } else {
//             console.error("Geolocation is not supported by your browser.");
//         }

//         // Fetch waste dump locations
//         fetch("/api/auth/profile")
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data?.userData?.wasteDumped) {
//                     setWasteDumpLocations(data.userData.wasteDumped);
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error fetching waste dump locations:", error);
//             });
//     }, [isLoaded]);

//     const handleMarkerClick = (marker: any) => {
//         setSelectedMarker(marker);
//     };

//     const handleCloseInfoWindow = () => {
//         setSelectedMarker(null);
//     };

//     return (
//         <div className={lato.className}>
//             <div className="flex items-center justify-center" style={{ marginLeft: "-20px" }}>
//                 <FaLocationDot className="text-red-700" size={30} />
//                 <h1 className="text-3xl uppercase mt-5 mb-5 font-bold text-center">Map View</h1>
//             </div>
//             {isLoaded ? (
//                 <GoogleMap mapContainerStyle={containerStyle} center={userLocation || { lat: 0, lng: 0 }} zoom={userLocation ? 16 : 3}>
//                     {wasteDumpLocations.map((dump, index) => (
//                         <Marker key={index} position={{ lat: dump.latitude, lng: dump.longitude }} onClick={() => handleMarkerClick(dump)}>
//                             {selectedMarker === dump && (
//                                 <InfoWindow onCloseClick={handleCloseInfoWindow}>
//                                     <div>
//                                         <h2>Waste Dump Location</h2>
//                                         <p>Latitude: {dump.latitude}</p>
//                                         <p>Longitude: {dump.longitude}</p>
//                                         <p>
//                                             <a href={`https://www.google.com/maps/search/?api=1&query=${dump.latitude},${dump.longitude}`} target="_blank" rel="noopener noreferrer">
//                                                 View in Google Maps
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </InfoWindow>
//                             )}
//                         </Marker>
//                     ))}
//                 </GoogleMap>
//             ) : (
//                 <div className="flex justify-center items-center min-h-screen">
//                     <SpinLoading />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GoogleMapsComponent;









// "use client";
// import { useEffect, useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { FaLocationDot } from "react-icons/fa6";

// // Firebase configuration with only Web API Key and database URL
// const firebaseConfig = {
//     apiKey: "AIzaSyA6DHz86qI35oomO5JbFen9bCFe4QzdEeU",
//     databaseURL: "https://garbagedetection-429509-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const MapComponent = () => {
//     const [location, setLocation] = useState({ lat: null, long: null });

//     useEffect(() => {
//         const locationRef = ref(database, "/");
//         onValue(locationRef, (snapshot) => {
//             const data = snapshot.val();
//             setLocation({ lat: data.Lat, long: data.Long });
//         });
//     }, []);

//     return (
//         <div className="container mx-auto px-4">
//             <div className="flex items-center justify-center">
//                 <FaLocationDot className="text-red-700" size={30} />
//                 <h1 className="text-3xl uppercase mt-5 mb-5 font-bold text-center">Map View</h1>
//             </div>
//             {location.lat && location.long ? (
//                 <MapContainer center={[location.lat, location.long]} zoom={13} style={{ height: "560px", width: "100%" }}>
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attributionControl={true} attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
//                     <Marker position={[location.lat, location.long]}>
//                         <Popup>
//                             Latitude: {location.lat}, Longitude: {location.long}
//                         </Popup>
//                     </Marker>
//                 </MapContainer>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default MapComponent;









