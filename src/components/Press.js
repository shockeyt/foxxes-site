import { pressData } from '../data/pressData'
import PressItem from "./PressItem"

import bandPhotos from '../FoxxesPressPhotos.zip'

const svgStyle = {
  display: 'block',
  fill: 'currentColor',
};

const Press = () => {
  return (
    <div className="press page-div pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-10 mt-3">
            <div className="section py-4 mb-4">
              <h2>Social Media</h2>
              <div className={"social-icons d-flex justify-content-center mt-4 mt-lg-0"} data-bg="square" data-color="#ffffff" data-bgcolor="#000000" data-size="26">
                <div className="preview-icon">
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/foxxesband/">
                    <svg className="niftybutton-instagram" style={svgStyle} data-tag="ins" data-name="Instagram" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                        <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                        <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                        <circle cx="351.5" cy="160.5" r="21.5"></circle>
                    </svg>
                  </a>
                </div>
                <div className="preview-icon">
                  <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/1us47RuXMBAzjNXcQIJFwp?si=wnUCcRvHTDSq95RMNgn2cQ&nd=1&dlsi=93cdd9ea060946b1">
                    <svg className="niftybutton-spotify" style={svgStyle} data-donate="true" data-tag="spo" data-name="Spotify" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                        <path d="M256 78c-98.3 0-178 79.7-178 178 0 98.31 79.7 178 178 178 98.31 0 178-79.69 178-178 0-98.3-79.69-178-178-178zm81.63 256.73a11.09 11.09 0 0 1-15.26 3.68c-41.8-25.53-94.4-31.31-156.37-17.16a11.1 11.1 0 0 1-4.93-21.64c67.8-15.49 125.96-8.82 172.88 19.86a11.1 11.1 0 0 1 3.68 15.26zm21.79-48.47a13.88 13.88 0 0 1-19.1 4.57c-47.84-29.4-120.77-37.92-177.36-20.74a13.9 13.9 0 0 1-17.32-9.25 13.9 13.9 0 0 1 9.25-17.3c64.65-19.62 145.01-10.12 199.96 23.64a13.87 13.87 0 0 1 4.56 19.08zm1.87-50.47c-57.37-34.07-152.02-37.2-206.8-20.58a16.65 16.65 0 1 1-9.66-31.87c62.88-19.08 167.4-15.4 233.45 23.81a16.63 16.63 0 0 1 5.82 22.82 16.63 16.63 0 0 1-22.8 5.82h-.01z"></path>
                    </svg>
                  </a>
                </div>
                <div className="preview-icon">
                  <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCgPYVFicfTSWoKIYcxpmASQ">
                    <svg className="niftybutton-youtube" style={svgStyle} data-donate="true" data-tag="you" data-name="YouTube" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                        <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="section py-4 mb-4">
              <div className="lg-flex">
                <div className="show-item mx-lg-5 mb-2">
                  <p className="text-white text-small mb-0">
                    <span>"You really need to them catch live if you get the chance. The band members have great chemistry together and the songs really come to life."</span>
                  </p>
                  <p className="text-white text-small mb-0">
                    - Noel Billups, Bandwagon Magazine
                  </p>
                </div>
                <div className="show-item mx-lg-5 mb-2">
                  <p className="text-white text-small mb-0">
                    <span>"They're definitely going to make you feel something.  Whether it's the longing that shines through the vocals, or the bright twinkling moments that find their way through the guitar work...they have established a solid sound and can only grow from here."</span>
                  </p>
                  <p className="text-white text-small mb-0">
                    - Prelude Press
                  </p>
                </div>
              </div>
            </div>

            <div className="section py-4 mb-4">
              <h2>Press Photos</h2>
              <div className="mt-4">
                <p className="text-white text-small mb-0">
                  View photos archive <a href="/photos">here</a>
                </p>
                <p className="text-white text-small mb-0">
                  or
                </p>
                <p className="text-white text-small mb-0">
                  Download photos <a href={bandPhotos} download>here</a>
                </p>
              </div>
            </div>

            <div className="section py-4 mb-4">
              <h2>Listen on Spotify</h2>
              <p className="text-white text-small mb-0">
                Firestarter
              </p>
              <p className="text-white text-small mb-0">
                The Moon is Down
              </p>
              <p className="text-white text-small mb-0">
                Continental Divider
              </p>
              <div className="d-flex justify-content-center">
                <iframe title="spotify firestarter player" src="https://open.spotify.com/embed/album/1Zm7vSg4ZsGM7beYRVejJ6" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>

            {pressData && pressData.map((item, index) =>
              <PressItem
                key={index + 1}
                title={item.title}
                excerpt={item.excerpt}
                link={item.link}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Press