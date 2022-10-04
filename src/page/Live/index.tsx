import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import videoStreamMerge from 'video-stream-merger'
import styles from './index.module.scss'

export type LiveProps = {}

const Live = (_prop: LiveProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  // const [videoStream, setVideoStream] = useState<MediaStream>()
  useEffect(() => {
    // const getUserMedia = navigator.mediaDevices.getUserMedia

    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(mediaStream => {
      // setVideoStream(mediaStream)
      console.log('mediaStream', mediaStream, videoRef)

      videoRef.current && (videoRef.current.srcObject = mediaStream)
    })

  }, [])

  return (
    <div>
      <video autoPlay className={styles.video} ref={videoRef}></video>
    </div>
  )
}

export default Live
