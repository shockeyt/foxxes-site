import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"

//import bandPic from './IMG_2117.jpg';
import bandPic from './Foxxes-roof.jpg';

import Drawer from './components/Drawer'
import Header from './components/Header'

import Home from './components/Home'
import Shows from './components/Shows'
import Press from './components/Press'
import Videos from './components/Videos'
import Photos from './components/Photos'
import Music from './components/Music'
import News from './components/News'
import FeaturedVideo from "./components/FeaturedVideo";
import Footer from "./components/Footer"

import './App.css';

const imgStyle = {
  backgroundImage: `url(${bandPic})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  maxWidth: '1600px',
  margin: 'auto',
  backgroundAttachment: 'fixed'
};

function App() {

  const [drawer, setDrawer] = React.useState(false)
  const handleDrawer = () => {
    setDrawer(prevDrawer => !prevDrawer)
  }

  return (
    <div className="App bkgd-img main-bkgd" style={imgStyle}>
      <div className="main">
        <div>
          <Router>
            <Drawer view={drawer} handleDrawer={handleDrawer} />
            <Header handleDrawer={handleDrawer} />
            <Routes>
              <Route path="/foxxes-site/" element={<Home />} />
              <Route path="/foxxes-site/shows" element={<Shows />} />
              <Route path="/foxxes-site/press-kit" element={<Press />} />
              <Route path="/foxxes-site/videos" element={<Videos />} />
              <Route path="/foxxes-site/photos" element={<Photos />} />
              <Route path="/foxxes-site/music" element={<Music />} />
              <Route path="/foxxes-site/news" element={<News />} />
            </Routes>
          </Router>
        </div>
        {/* <FeaturedVideo /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
