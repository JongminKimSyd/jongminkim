import React, { Component } from 'react'
import SocialList from '../shared/sociallist'

export default class Header extends Component {
    render() {
        const data = this.props.resumeData;

        return (
            < header id = "home" >
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                    </ul> {/* end #nav */}
                </nav> {/* end #nav-wrap */ }
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">I'm {data.name}.</h1>
                <h3>I'm a {data.location} based <span>{data.role[0]}</span>, <span>{data.role[1]}</span> and <span>{data.role[2]}</span> creating awesome and
                    productive web application for enterprises around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <SocialList sns={data.sns} listType="social" />
            </div>
        </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
            </header>
          );
    }
}