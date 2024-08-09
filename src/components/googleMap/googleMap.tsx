"use client"

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

export default function GoogleMap() {
  const position = { lat: -16.76725196838379, lng: -49.30858612060547 }

  return (
    <div className="relative my-10 flex h-[536px] w-full flex-col items-center gap-5 p-2">
      <h2 className="text-center text-2xl font-bold text-secondary500">
        Localização
      </h2>
      <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
        <Map defaultCenter={position} defaultZoom={14}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}
