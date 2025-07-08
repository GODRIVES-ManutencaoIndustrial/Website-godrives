"use client"

export default function GoogleMap() {
  const address =
    "R. 42, 2 - QD 64 LT 24 - Cardoso, Aparecida de Goiânia - GO, 74934-300, Brazil"

  // Codifica o endereço para ser usado na URL
  const encodedAddress = encodeURIComponent(address)

  // Constrói a URL do Google Maps para incorporação com o marcador
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="relative h-[536px] w-full">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full rounded-xl shadow-xl"
        title="Google Map Location"
      ></iframe>
    </div>
  )
}
