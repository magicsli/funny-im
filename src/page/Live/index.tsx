import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import videoStreamMerge from 'video-stream-merger'
import styles from './index.module.scss'

// const getusermedia = require('getusermedia')
// const screenRecord = require('screen-record')

export type LiveProps = {}

const Live = ({}: LiveProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  // const [videoStream, setVideoStream] = useState<MediaStream>()
  useEffect(() => {
    // const getUserMedia = navigator.mediaDevices.getUserMedia

    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(mediaStream => {
      // setVideoStream(mediaStream)
      console.log('mediaStream', mediaStream, videoRef)

      videoRef.current && (videoRef.current.srcObject = mediaStream)
    })

    return () => {}
  }, [])

  return (
    <div>
      <video autoPlay className={styles.video} ref={videoRef}></video>
    </div>
  )
}

export default Live
