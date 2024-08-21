"use client"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

type TypeGoogleMap = {
  apiKey: string | undefined
}

export default function GoogleMap({ apiKey }: TypeGoogleMap) {
  const position = { lat: -16.76725196838379, lng: -49.30858612060547 }

  return (
    <div className="relative my-10 flex h-[536px] w-full flex-col items-center gap-5 p-2">
      <h2 className="text-secondary-500 text-center text-2xl font-bold">
        Localização
      </h2>
      <APIProvider apiKey={`${apiKey}`}>
        <Map defaultCenter={position} defaultZoom={14}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}
