import React, { Component } from 'react'
import Contact from './Contact'
export default class Contacts extends Component {
    constructor(){
        super();
        this.state= { 
            contacts:[
                {
                    id:1,
                    name:'Abhi',
                    email:'adsa@Gaepad.com',
                    mob:'65656565'
                },
                {
                    id:2,
                    name:'Abhi',
                    email:'adsa@Gaepad.com',
                    mob:'65656565'
                },{
                    id:3,
                    name:'Abhi',
                    email:'adsa@Gaepad.com',
                    mob:'65656565'
                }
            ]
        }
    }
    render() {
        const {contacts}=this.state;
        return (
            <div>
                {
                    contacts.map(contact=>( <
                        Contact key={contact.id} contact={contact}/>
                    ))
                }
            </div>
        )
    }
}
