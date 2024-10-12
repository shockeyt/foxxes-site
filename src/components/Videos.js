import React, { useEffect } from "react"
import { videoData } from '../data/videoData'
import VideoItem from "./VideoItem"

const Videos = () => {

  const [videosData, setVideosData] = React.useState({
    videoType: 'music-video',
    videos: []
  })

  useEffect(() => {
    setVideosData(prevVideosData => {
      return {
        ...prevVideosData,
        videos: videoData
      }
    })
  }, [])

  const handleClick = (event) => {
    const type = event.target.dataset.type
    setVideosData(prevVideosData => {
      return {
        ...prevVideosData,
        videoType: type
      }
    })
  }

  return (
    <div className="videos page-div pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8">
            <div className="d-flex flex-wrap justify-content-center">
              <h5 onClick={handleClick} data-type="music-video" className={videosData.videoType === 'music-video' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Music Videos</h5>
              <h5 onClick={handleClick} data-type="session" className={videosData.videoType === 'session' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Sessions</h5>
              <h5 onClick={handleClick} data-type="live-show" className={videosData.videoType === 'live-show' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Live Shows</h5>
              <h5 onClick={handleClick} data-type="promo" className={videosData.videoType === 'promo' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Promos</h5>
            </div>
          </div>
          <div className="col-12 offset-md-1 col-md-10 mt-5">
            <div className="video-container d-lg-flex">
              {videosData.videos && videosData.videos.map((item, index) => 
                <VideoItem 
                  key={index + 1}
                  data={item}
                  type={videosData.videoType}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos