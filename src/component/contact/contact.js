import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        const me = this.props.resumeData;

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">I'm open to new challenges and opportunities. Please leave your message in the form below or contact me via my contact details.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                        <iframe title="contact me" src="https://docs.google.com/forms/d/e/1FAIpQLScopB-JhDoNvHJ32rUexm_2MFzRGIlrLEM2_4vOeN5_U1yVUA/viewform?embedded=true" width="100%" height="1032" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                <span>{me.name}</span><br />
                                <span>{me.address}<br />
                                    {me.city}, {me.state} {me.postcode} {me.country}
                                </span><br />
                                <span><a href={`callto:${me.mobile}`}>{me.mobile}</a></span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}