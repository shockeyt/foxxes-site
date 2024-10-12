import React, { useEffect } from "react"
import { photoData } from '../data/photoData'
import PhotoItem from "./PhotoItem"

const Photos = () => {

  const [photosData, setPhotosData] = React.useState({
    photoType: 'poster',
    photos: []
  })

  useEffect(() => {
    setPhotosData(prevPhotosData => {
      return {
        ...prevPhotosData,
        photos: photoData.filter(item => item.type === 'poster')
      }
    })
  }, [])

  const handleClick = (event) => {
    const type = event.target.dataset.type
    setPhotosData(prevPhotosData => {
      return {
        ...prevPhotosData,
        photoType: type,
        photos: photoData.filter(item => item.type === type)
      }
    })
  }

  return (
    <div className="photos page-div pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8">
            <div className="d-flex justify-content-center">
              <h5 onClick={handleClick} data-type="poster" className={photosData.photoType === 'poster' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Posters</h5>
              <h5 onClick={handleClick} data-type="promo" className={photosData.photoType === 'promo' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Promos</h5>
            </div>
          </div>
          <div className="col-12 offset-md-2 col-md-8 mt-5">
            <div className="row">
              <div className="col-12 col-md-6">
                {photosData.photos && photosData.photos.map((item, index) => 
                  (index % 2 === 0) && 
                  <PhotoItem 
                    key={index + 1}
                    image={item.image}
                    alt={item.alt}
                  />
                )}
              </div>
              <div className="col-12 col-md-6">
                {photosData.photos && photosData.photos.map((item, index) => 
                  (index % 2 !== 0) && 
                  <PhotoItem 
                    key={index + 1}
                    image={item.image}
                    alt={item.alt}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos