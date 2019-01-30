import React from 'react'

const Header = (props) => (
    <div className="navbar-fixed">
        <nav className="nav-wrapper cyan lighten-2">
            <div className="container">
                <div className="valign-wrapper">
                    <p className="brand-logo center">Cooper Hewitt Exhibitions</p>
                </div>
                <i className="material-icons" onClick={props.onReload}>arrow_back</i>
            </div>
        </nav>
    </div>
)

export default Header
