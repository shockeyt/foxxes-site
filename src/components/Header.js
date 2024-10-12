import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import nameLogo from '../name_logo_reversed.jpeg';

import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

const Header = (props) => {
  const [pageData, setPageData] = React.useState({
    scroll: false
  })

  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY > 50) {
        setPageData(prevPageData => {
          return {
            ...prevPageData,
            scroll: true
          }
        })
      } else {
        setPageData(prevPageData => {
          return {
            ...prevPageData,
            scroll: false
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={pageData.scroll ? "scrolling" : null}>
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <NavMobile handleDrawer={props.handleDrawer} />
            <div className="d-flex justify-content-center">
              <NavLink to="/">
                <img className="header-logo" width={200} src={nameLogo} alt="Foxxes fox logo" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Nav />
        <Socials />
      </div>
    </header>
  )
}

export default Header