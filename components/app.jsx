import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Live from './live'


class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">CSGO-STATS</Link>
                        <ul className="right">
                            <li><Link to="/live">Test</Link></li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute name="live" component={Live}/>
        </Route>
    </Router>
), document.getElementById('content'))
