import Socials from './Socials'

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 offset-lg-3 col-lg-6"><Socials type={'footer'} /></div>
          <div className="col-12 offset-lg-3 col-lg-6 mt-5 mb-3">
            <p className="text-white text-small mb-0">
              <a className="text-white" target="_blank" rel="noreferrer" href="http://tylershockey.co/">© 2024 Tyler Shockey</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer