import React from 'react'
import Social from './social'

export default class SocialList extends React.Component {
    render () {
        const socials = this.props.sns;
        const socialListItems = [];

        socials.forEach((sns)=>{
            socialListItems.push(<Social url={sns.url} name={sns.name} key={sns.name} />);
        });

        return(
            <ul className={this.props.listType}>
                {socialListItems}
            </ul>
        );
    }
}