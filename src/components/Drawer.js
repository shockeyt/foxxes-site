import { NavLink } from "react-router-dom"
import Socials from './Socials'

const Drawer = (props) => {
  return (
    <div className={props.view ? "mobile-drawer show" : "mobile-drawer"}>
      <div className="inner-drawer">
        <button className="drawer-close" onClick={() => props.handleDrawer()}>
          <span></span>
          <span></span>
        </button>
        <div className="nav">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                    <NavLink className="nav-link" to="/foxxes-site/shows" onClick={() => props.handleDrawer()}>
                      Shows
                    </NavLink>
                  </li>
                  <li>
                    {/* <NavLink className="nav-link" to="/foxxes-site/press-kit" onClick={() => props.handleDrawer()}>
                      Press
                    </NavLink> */}
                    <a target="_blank" rel="noreferrer" className="nav-link" href="https://sites.google.com/view/foxxes-press-kit-sketch/home">
                      Press Kit
                    </a>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/foxxes-site/videos" onClick={() => props.handleDrawer()}>
                      Videos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/foxxes-site/photos" onClick={() => props.handleDrawer()}>
                      Photos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/foxxes-site/music" onClick={() => props.handleDrawer()}>
                      Music
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/foxxes-site/news" onClick={() => props.handleDrawer()}>
                      News
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-12 py-3">
                <hr />
              </div>
              <div className="col-12">
                <Socials type={'drawer'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer