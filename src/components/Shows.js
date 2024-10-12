import React, { useEffect } from "react"
import { showData } from '../data/showData'
import ShowItem from "./ShowItem"

const Shows = () => {

  const [showsData, setShowsData] = React.useState({
    showType: 'upcoming',
    shows: []
  })

  useEffect(() => {
    setShowsData(prevShowsData => {
      return {
        ...prevShowsData,
        shows: showData.filter(item => item.type === 'upcoming')
      }
    })
  }, [])

  const handleClick = (event) => {
    const type = event.target.dataset.type
    setShowsData(prevShowsData => {
      return {
        ...prevShowsData,
        showType: type,
        shows: showData.filter(item => item.type === type)
      }
    })
  }

  return (
    <div className="shows page-div pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8">
            <div className="d-flex justify-content-center">
              <h5 onClick={handleClick} data-type="upcoming" className={showsData.showType === 'upcoming' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Upcoming</h5>
              <h5 onClick={handleClick} data-type="archive" className={showsData.showType === 'archive' ? "show-cat text-white mx-3 cursor-pointer selected" : "show-cat text-white mx-3 cursor-pointer"}>Archive</h5>
            </div>
          </div>
          <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 mt-5">
            {(!showsData.shows || showsData.shows.length === 0) &&
              <p className="text-white text-small mb-0">No upcoming shows currently</p>
            }
            {showsData.shows && showsData.shows.map((item, index) => 
              <ShowItem 
                key={index + 1}
                date={item.date}
                time={item.time}
                venue={item.venue}
                support={item.support}
                price={item.price}
                link={item.link}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shows