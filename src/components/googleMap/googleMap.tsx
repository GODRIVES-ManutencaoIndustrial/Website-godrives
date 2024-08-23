"use client"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

type TypeGoogleMap = {
  apiKey: string | undefined
}

export default function GoogleMap({ apiKey }: TypeGoogleMap) {
  const position = { lat: -16.76725196838379, lng: -49.30858612060547 }

  return (
    <div className="relative h-[536px] w-full">
      <APIProvider apiKey={`${apiKey}`}>
        <Map
          className="h-full w-full rounded-xl shadow-xl"
          defaultCenter={position}
          defaultZoom={14}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}
