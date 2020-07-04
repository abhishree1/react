import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        const {name,email,mob}=this.props.contact;
        return (
            <div className="card card-body">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Email : {email}</li>
                        <li className="list-group-item">Mob: {mob}</li>
                    </ul>           
            </div>
        )
    }
}
