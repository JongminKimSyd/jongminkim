import React from 'react'

export default class Resume extends React.Component {
    render() {
        return (
            <section id="resume">
                {/* Education
----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>University of Canberra</h3>
                                <p className="info">Bachelor of Information Technology <span>•</span> <em className="date">Feb 2014</em></p>
                                <p>The course focuses on the systems development aspects of employment in the information technology profession. Students gain extensive experience in developing information technology to address the needs of modern organisations. Teamwork, project management and communication skills are developed in addition to exploration of the technical and human aspects of information technology and its use. The information technology related units covered in the course include hardware concepts, local and worldwide networks, data structures and algorithms, object-oriented software design, operating systems, programming theory and practice, distributed systems theory, and software quality management. Information Systems units include database management, human-computer interaction, information systems analysis and design, document and workflow and management support. Programming environments used in the units include .Net and Linux, and various web design and programming tools. Students gain extensive practical experience using Visual Basic .Net, C++ and C# within the Microsoft .Net Framework. They also gain good experience working in Linux in some subjects. Analysis and specification methods include UML, XML, structured and soft systems methodologies. Final year students complete a team project, producing and implementing a substantial software-based system to address a need of a local business, government or community organisation. Graduates gain employment in a wide range of businesses and organisations that develop or use IT-based systems. Some graduates work with equipment and software suppliers. Others work with specialist consulting groups.</p>
                            </div>
                        </div> {/* item end */}                       
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Oakton Ltd.</h3>
                                <p className="info">Consultant <span>•</span> <em className="date">January 2015 - Present</em></p>
                                <p>Providing an externally facing service to clients in the development of industry specific strategic business solutions aligned to projects and consulting assignments</p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>HotHouse Interactive</h3>
                                <p className="info">Front end developer <span>•</span> <em className="date">July 2014 - Jan 2015</em></p>
                                <p>Developing and maintaining public websites in an agile environment</p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>I have particular strengths in front end development. I have worked on a variety of projects maintaining, developing and integrating Australian websites and web services using latest technologies.
I have worked on a range of UI/UX prototyping, front end development, technical consultation, source code management, technical documentation and estimation. 
</p>
                        <div className="bars">
                            <ul className="skills">
                                <SkillBar skillname="JavaScript" barwidth="85%"/>
                                <SkillBar skillname="CSS" barwidth="90%"/>
                                <SkillBar skillname="HTML5" barwidth="95%"/>
                                <SkillBar skillname="jQuery" barwidth="90%"/>
                                <SkillBar skillname="React" barwidth="70%"/>
                                <SkillBar skillname="Sitecore" barwidth="70%"/>
                                <SkillBar skillname="ASP.NET MVC" barwidth="65%"/>
                            </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>

        );
    }
}

class SkillBar extends React.Component {
    render() {
        return (
            <li><span className="bar-expand" style={{width: this.props.barwidth}}/><em>{this.props.skillname}</em></li>
        );
    }
}