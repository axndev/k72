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
        src='https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1761578111~exp=1761581711~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=93926cb7f3a40853f59a7bf9647d44df6b3630f4414273faf10b22510536f9d9&r=dXMtZWFzdDE%3D' />
    </div>
  )
}

export default Video
