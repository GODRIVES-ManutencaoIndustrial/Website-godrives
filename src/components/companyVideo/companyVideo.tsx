"use client"

import { IoLogoYoutube } from "react-icons/io"
import { useState } from "react"

export default function CompanyVideo() {
  const [videoLoaded, setVideoLoaded] = useState<boolean>()

  const videoId = "8wIJUhKVqDM"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const loadVideo = () => {
    if (!videoLoaded) setVideoLoaded(true)
  }

  return (
    <div>
      {videoLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[580px] w-full rounded-xl shadow-xl"
        ></iframe>
      ) : (
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt="Thumbnail do vídeo"
            className="h-[580px] w-full cursor-pointer rounded-lg object-cover"
            onClick={loadVideo}
          />
          <IoLogoYoutube
            onClick={loadVideo}
            size={96}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#f73131]"
          />
          <div className="absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 bg-gray-50"></div>
        </div>
      )}
    </div>
  )
}
