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

        workHistory.forEach((workhistoryItem) => {
            workHistoryRows.push(<WorkHistoryRow historyItem={workhistoryItem} key={workhistoryItem.name} />);
        });


        return (
            <section id="resume">
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
                        <p>My core strengths lie in front-end engineering, responsive UX implementation, technical consultation, source control, documentation and solution estimation. I have worked across a range of enterprise and public-sector projects, delivering maintainable, user-focused web experiences using current technologies and best practices.</p>
                        <div className="bars">
                            <ul className="skills">
                                {skillRows}
                            </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
                {/* Education----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>University of Canberra</h3>
                                <p className="info">Bachelor of Information Technology <span>•</span> <em className="date">Dec 2013</em></p>
                                <p>This degree developed a strong foundation in software design, systems thinking, project delivery and communication. It included practical experience across .NET development, object-oriented programming, systems analysis and structured methodologies, equipping me to deliver effective technology solutions in real-world business settings.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
            </section>

        );
    }
}