import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
import { useRef,useEffect } from 'react'


const VideoPlayer = ({play,setPlay}) => {

  const videoRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && videoRef.current.contains(event.target)) {
          setPlay(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setPlay]);

  useEffect(()=>{
    if(!play&& videoRef.current){
      videoRef.current.children[0].currentTime=0;
    }
  },[play])

  return (
    <div ref={videoRef} className={`video-player ${play ? '': 'hide'}`} >
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer