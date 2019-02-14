import React from 'react'

export default class Social extends React.Component {
    render(){
        return(
            <li><a href={this.props.url}><i className={`fa fa-${this.props.name}`} /></a></li>
        );
    }
}