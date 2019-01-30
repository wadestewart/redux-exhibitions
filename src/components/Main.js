// Import dependencies
import React,  { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Import components
import ExhibitionGrid from './ExhibitionsGrid'
import Single from './Single'


class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className="center">
                        <Link to="/">Reduxibitions</Link>
                    </h1>
                    <Route exact path="/" component={ExhibitionGrid}></Route>
                    <Route path="/view/:postId" component={Single}></Route>
                </div>
            </Router>
        )
    }
}

export default Main
