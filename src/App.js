import { Component } from "react";
import Sidenav from './components/Sidenav.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Upnav from './components/Upnav.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="fixed">
        <Sidenav />
      </div>
      <div className="lg:ml-0 ml-96">
      <div className=' bg-black'>
        <Upnav/>
        {/* <About/>
        <Projects/>
        <Contact/> */}
        <Routes>
          <Route>
            <Route index element={<About/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>      
    </div>
      </div>
    </div>
  );
}

export default App;
