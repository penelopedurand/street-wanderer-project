import React from 'react'
import { useHistory, useState, useEffect } from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

function Home() {
    const [viewport, setViewport] = useState({
        latitude: 40.646905,
        longitude: -73.958142,
        width: '90vw',
        height: '90vh',
        zoom: 10
    })

    return (
        <>
            <div>Home</div>
            <h3>HOME</h3>
            <div className="map">
                <ReactMapGL {...viewport}
                    mapboxAccessToken="pk.eyJ1IjoibGFyYWluYm93bGxhbWEiLCJhIjoiY2w1OGNkbzI2MXl1NTNkbWVyNXJjdzJ2bCJ9.7N9MTnvtXDVgy6HQJByhEA"
                    mapStyle="mapbox://styles/larainbowllama/cl589z875000215ubfg7ul7bm"
                    style={{ width: 1000, height: 300 }}
                    onMove={evt => setViewport(evt.viewState)}
                >
                </ReactMapGL>
            </div>
        </>
    )
}

export default Home;