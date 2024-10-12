import { v4 as uuidv4 } from 'uuid'
import { newsData } from '../data/newsData'
import NewsItem from "./NewsItem"

const Home = () => {
  return (
      <div className="home page-div">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="show-cat text-white mx-3">Recent News</h5>
                <div className="container">
                  <div className="row">
                    <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 mt-3">
                      {newsData && newsData.map((item, index) =>
                        (index < 4) &&
                          <NewsItem
                            key={uuidv4()}
                            data={item}
                          />
                      )}
                    </div>
                  </div>
                </div>
                <div className="instagram-feed mt-5">
                  <h5 className="show-cat text-white mx-3">The Feed</h5>
                  <iframe className="social-iframe" src="https://www.juicer.io/api/feeds/foxxesband-f20a627f-3b26-4656-97f3-58ccdfb923f6/iframe" frameBorder="0" width="1000" height="1000"></iframe>
                  {/* <ul className="juicer-feed" data-feed-id="foxxesband" data-origin="embed-code">
                    <h1 className="referral"><a href="https://www.juicer.io">Powered by Juicer.io</a></h1>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Home