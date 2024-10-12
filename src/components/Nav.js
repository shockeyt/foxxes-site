import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul>
              <li>
                <NavLink className="nav-link" to="/shows">
                  Shows
                </NavLink>
              </li>
              <li>
                {/* <NavLink className="nav-link" to="/press-kit">
                  Press Kit
                </NavLink> */}
                <a target="_blank" rel="noreferrer" className="nav-link" href="https://sites.google.com/view/foxxes-press-kit-sketch/home">
                  Press Kit
                </a>
              </li>
              <li className="middle-left">
                <NavLink className="nav-link" to="/videos">
                  Videos
                </NavLink>
              </li>
              <li className="middle-right">
                <NavLink className="nav-link" to="/photos">
                  Photos
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/music">
                  Music
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/news">
                  News
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav