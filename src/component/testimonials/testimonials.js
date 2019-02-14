import React, { Component } from 'react'

export default class Testmonicals extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <blockquote>
                                            <p>The exceptional work done with NRMA over the past 6-8 months on the current project pipeline of work. He has been without question standouts from Oakton and a clear sign that his effort should be heard within Oakton. His attention to the job in hand and detail and efficiency/quality of work has been exceptional.</p>
                                            <cite>Paul Henry, Project Manager, NRMA</cite>
                                        </blockquote>
                                    </li>

                                    <li>
                                        <blockquote>
                                            <p>I've worked with Jongmin on the Hyundai intranet project and NSW Health Yes Survey project and found that Jongmin has a fantastic attitude towards his work and consistently aims to exceed expectations.</p>
                                            <cite>Michael Carey, Senior Consultant, Oakton</cite>
                                        </blockquote>
                                    </li>
                                </ul>
                            </div> {/* div.flexslider ends */}
                        </div> {/* div.flex-container ends */}
                    </div> {/* row ends */}
                </div>  {/* text-container ends */}
            </section>

        );
    }
}