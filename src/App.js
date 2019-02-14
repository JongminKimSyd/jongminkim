import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header'
import About from './component/about/about'
import Resume from './component/resume/resume'
import Portfolio from './component/portfolio/portfolio'
import Testmonicals from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import resumeData from './resumeData'


class App extends Component {
  render() {
    return (
      <div className="App">
         <Header resumeData={resumeData} />
         <About resumeData={resumeData} />
         <Resume />
         {/* <Portfolio /> */}
         <Testmonicals />
         {/* <Contact resumeData={resumeData} /> */}
         <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
