import React from 'react'

export default function Header(props) {
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-2 py-0">
            <h4 className="navbar-brand">{props.branding}</h4>
            <div>
                <ul className="navbar-nav ml-auto d-sm-flex d-xs-flex">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </div>           
        </nav>
    )
}

