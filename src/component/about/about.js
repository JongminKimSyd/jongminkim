import React from 'react'

export default class About extends React.Component {
  render() {
    const me = this.props.resumeData;
    const startYear = new Date('July 14, 2014 09:24:00').getFullYear();
    const yearNow = new Date().getFullYear();
    let year = yearNow - startYear;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" alt="Jongmin Kim profile on about me" src="images/jongmin_profile.jpg" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am an experienced consultant with {year} years working within the IT Industry across multiple business domains including automotive, services and government. I'm also a certified Sitecore developer who has experience working in a platinum Sitecore solution partner company. 
              I also have a bachelor degree of information technology and have been certified as a developer programmer by ACS.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{me.name}</span><br />
                  <span>{me.address}<br />
                    {me.city}, {me.state} {me.postcode} {me.country}
                  </span><br />
                  <span><a href={`callto:${me.mobile}`}>{me.mobile}</a></span><br />
                  <span><a href={`mailto:${me.email}`}>{me.email}</a></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="download/Long.jongmin.kim.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
}