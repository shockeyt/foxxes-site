import { v4 as uuidv4 } from 'uuid'
import { newsData } from '../data/newsData'
import NewsItem from "./NewsItem"

const News = () => {
  return (
    <div className="news page-div pb-3">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 mt-3">
              {newsData && newsData.map((item, index) => 
                <NewsItem 
                  key={uuidv4()}
                  data={item}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News