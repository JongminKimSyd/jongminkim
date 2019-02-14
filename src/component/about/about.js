import React from 'react'

export default class About extends React.Component {
  render() {
    const me = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" alt="Jongmin Kim profile on about me" src="images/jongmin_profile.jpg" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am an experienced consultant with 5 years working within the IT Industry across multiple business domains including automotive, services, information technology and government.
      I also have a bachelor degree of information technology and have been certified as a developer programmer by ACS and a Sitecore developer.</p>
      
<p>      In my most recent roles, I worked as a web developer for the Get Healthy at Work website enhancements project team. During the project time, I did the following tasks; technical advices on existing system analysis, UI implementation, evaluated technical feasibility, researched and used his .Net and Sitecore skills to meet the requirements and timeline, developed and integrated web site on Sitecore CMS, and produced documents.
</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{me.name}</span><br />
                  <span>{me.address}<br />
                    {me.city}, {me.state} {me.postcode} {me.country}
                  </span><br />
                  <span><a href={`callto:${me.mobile}`}>{me.mobile}</a></span><br />
                  <span><a href={`mailto:${me.email}?subject=Job opportunity`}>{me.email}</a></span>
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