import foxxLogo from '../two_headed_fox_cropped.png';

const svgStyle = {
  display: 'block',
  fill: 'currentColor',
};

const Socials = (props) => {
  return (
    <div className="mt-5 mt-lg-0">
      {(props.type && (props.type === 'footer' || props.type === 'drawer')) &&
        <div className="d-lg-none">
          <img width={120} src={foxxLogo} alt="Foxxes fox logo" />
        </div>
      }
      <div className={(props.type && props.type === 'drawer') ? "social-icons drawer d-flex justify-content-center mt-4 mt-lg-0" : "social-icons d-flex justify-content-center mt-4 mt-lg-0"} data-bg="square" data-color="#ffffff" data-bgcolor="#000000" data-size="26">
        <div className="preview-icon">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/foxxestheband">
            <svg className="niftybutton-facebook" style={svgStyle} data-tag="fac" data-name="Facebook" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
              <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
            </svg>
          </a>
        </div>
        {/* <div className="preview-icon">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/FoxxesBand">
            <svg className="niftybutton-twitter" style={svgStyle} data-tag="twi" data-name="Twitter" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
            </svg>
          </a>
        </div> */}
        <div className="preview-icon">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/foxxesband/">
            <svg className="niftybutton-instagram" style={svgStyle} data-tag="ins" data-name="Instagram" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                <circle cx="351.5" cy="160.5" r="21.5"></circle>
            </svg>
          </a>
        </div>
        <div className="preview-icon middle-left">
          <a href="mailto:Foxxestheband@gmail.com?subject=What does the Foxx say?" target="_self" data-content="Foxxestheband@gmail.com" data-type="mail">
            <svg className="niftybutton-email" style={svgStyle} data-donate="true" data-tag="ema" data-name="Email" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
            </svg>
          </a>
        </div>
        {(props.type && props.type === 'footer') &&
          <div className="d-none d-lg-block">
            <img width={61} src={foxxLogo} alt="Foxxes fox logo" />
          </div>
        }
        <div className="preview-icon middle-right">
          <a target="_blank" rel="noreferrer" href="https://foxxesband.bandcamp.com">
            <svg id="bandcampIcon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
              <g style={svgStyle}><g><path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490s490-219.4,490-490C990,229.4,770.6,10,500,10z M660,720.4H136.3L340,279.6h523.8L660,720.4z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
            </svg>
          </a>
        </div>
        {/* <div className="preview-icon">
          <a target="_blank" rel="noreferrer" href="https://soundcloud.com/foxxesband/">
            <svg className="niftybutton-soundcloud" style={svgStyle} data-donate="true" data-tag="sou" data-name="SoundCloud" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M443.5 273.1c0 25.1-20.4 45.5-45.5 45.5H271.5V162.3c4.8-1.8 9.9-3.1 15.1-3.9 4.1-0.6 8.3-1 12.5-1 42.3 0 77 32.7 80.3 74.1 5.7-2.5 11.9-4 18.6-4C423.1 227.6 443.5 248 443.5 273.1zM224.2 193.2v125.4h15.1v-134.5c-3.4 3.7-6.4 7.8-9 12.1C228.4 195 226.3 194.1 224.2 193.2zM247.6 318.6h15.1v-152.4c-5.4 2.7-10.5 6.1-15.1 9.9V318.6zM151.8 208.9v109.7h15.1V196.9C161.3 200.2 156.2 204.2 151.8 208.9zM106.5 231.6v86.5c1.9 0.2 3.7 0.4 5.7 0.4h7.9v-86.6c-2.6-0.5-5.2-0.7-7.9-0.7C110.3 231.3 108.4 231.4 106.5 231.6zM86.5 310.2c3.4 2.5 7.2 4.5 11.3 5.9v-82.4c-4.1 1.4-7.9 3.4-11.3 5.9V310.2zM128.4 234.4v84.2h15.1v-98.7c-3.4 5.6-6 11.8-7.5 18.4C133.6 236.8 131.1 235.5 128.4 234.4zM175.9 318.6h15.1V188.8c-5.3 0.7-10.3 2-15.1 3.8V318.6zM200.1 318.6h15.1v-128.3c-4.8-1.2-9.9-1.9-15.1-1.9V318.6L200.1 318.6zM79.1 303.4v-56.9c-6.6 7.6-10.6 17.6-10.6 28.5C68.5 285.8 72.5 295.7 79.1 303.4z"></path>
            </svg>
          </a>
        </div> */}
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
  )
}

export default Socials