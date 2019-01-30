import React,  { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div>
                <h1 className="center">
                    <Router>
                        <Link to="/">Reduxibitions</Link>
                    </Router>
                </h1>
            </div>
        )
    }
}

export default Main
