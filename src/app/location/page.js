"use client";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";

// Firebase configuration with only Web API Key and database URL
const firebaseConfig = {
    apiKey: "AIzaSyA6DHz86qI35oomO5JbFen9bCFe4QzdEeU",
    databaseURL: "https://garbagedetection-429509-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const MapComponent = () => {
    const [location, setLocation] = useState({ lat: null, long: null });

    useEffect(() => {
        const locationRef = ref(database, "/");
        onValue(locationRef, (snapshot) => {
            const data = snapshot.val();
            setLocation({ lat: data.Lat, long: data.Long });
        });
    }, []);

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
                <FaLocationDot className="text-red-700" size={30} />
                <h1 className="text-3xl uppercase mt-5 mb-5 font-bold text-center">Map View</h1>
            </div>
            {location.lat && location.long ? (
                <MapContainer center={[location.lat, location.long]} zoom={13} style={{ height: "560px", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attributionControl={true} attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                    <Marker position={[location.lat, location.long]}>
                        <Popup>
                            Latitude: {location.lat}, Longitude: {location.long}
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MapComponent;
