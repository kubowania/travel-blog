import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useEffect } from 'react'

const Map = ({ longitude, latitude }) => {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_API

    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        if (map.current) return

        if (longitude, latitude) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [longitude, latitude],
                zoom: 5
            })
        }

    }, [ longitude, latitude])
    return (
        <div ref={mapContainer} className="map"/>
    )
}

export default Map