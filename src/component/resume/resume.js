import React from 'react'

class SkillBar extends React.Component {
    render() {
        return (
            <li><span className="bar-expand" style={{ width: this.props.barwidth }} /><em>{this.props.skillname}</em></li>
        );
    }
}

class WorkHistoryRow extends React.Component {
    render() {
        const historyItem = this.props.historyItem;
        let endDate = historyItem.endDate === "" ? "Present" : historyItem.endDate;
        
        return (
            <div className="row item">
                <div className="twelve columns">
                    <h3>{historyItem.name}</h3>
                    <p className="info">{historyItem.position} <span>•</span> <em className="date">{historyItem.startDate} - {endDate}</em></p>
                    <p>{historyItem.workDescription}</p>
                </div>
            </div>
        );
    }
}

export default class Resume extends React.Component {
    render() {
        const skills = this.props.skills;
        const skillRows = [];
        skills.forEach((skill) => {
            skillRows.push(<SkillBar skillname={skill.skillname} barwidth={`${skill.barwidth}%`} key={skill.skillname} />);
        });

        const workHistory = this.props.workhistory;
        const workHistoryRows = [];

        workHistory.forEach((workhistoryItem)=> {
            workHistoryRows.push(<WorkHistoryRow historyItem={workhistoryItem} key={workhistoryItem.name} />);
        });


        return (
            <section id="resume">
                {/* Education----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>University of Canberra</h3>
                                <p className="info">Bachelor of Information Technology <span>•</span> <em className="date">Feb 2014</em></p>
                                <p>The course focuses on the systems development aspects of employment in the information technology profession. During the course I gained following experience.</p>
                                <ul>
                                    <li>Extensive experience in developing information technology to address the needs of modern organisations</li>
                                    <li>Teamwork, project management and communication skills</li>
                                    <li>Exploration of the technical and human aspects of information technology and its use</li>
                                    <li>Information technology
                                            <ul>
                                            <li>Hardware concepts</li>
                                            <li>Local and worldwide networks</li>
                                            <li>Data structures and algorithms</li>
                                            <li>Object-oriented software design</li>
                                            <li>Operating systems</li>
                                            <li>Programming theory and practice</li>
                                            <li>Distributed systems theory</li>
                                            <li>Software quality management</li>
                                        </ul>
                                    </li>
                                    <li>Information Systems
                                            <ul>
                                            <li>Database management</li>
                                            <li>Human-computer interaction</li>
                                            <li>Information systems analysis and design</li>
                                            <li>Document and workflow and management support</li>
                                        </ul>
                                    </li>
                                    <li>Programming environments
                                            <ul>
                                            <li>.Net and Linux</li>
                                            <li>Various web design and programming tools</li>
                                        </ul>
                                    </li>
                                    <li>Extensive practical experience using Visual Basic .Net, C++ and C# within the Microsoft .Net Framework</li>
                                    <li>Analysis and specification methods include UML, XML, structured and soft systems methodologies.</li>
                                    <li>In final year of study, completed a team project, producing and implementing a substantial software-based system to address a need of a local business, government or community organisation.</li>
                                </ul>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {workHistoryRows}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>I have particular strengths in front end development including UI/UX prototyping, front end development, technical consultation, source code management, technical documentation and estimation. I have worked on a variety of projects maintaining, developing and integrating Australian websites and web services using latest technologies.</p>
                        <div className="bars">
                            <ul className="skills">
                                {skillRows}
                            </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>

        );
    }
}