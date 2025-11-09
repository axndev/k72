import React from 'react'

function Video() {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src='./video.mp4' />
    </div>
  )
}

export default Video
