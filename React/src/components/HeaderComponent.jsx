import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'reactstrap'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{padding:"1em"}} >
                        <div><a href="" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    };
}
