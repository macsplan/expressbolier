import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

const Socks = (props) => (
  <h3>{props.match.params.product}</h3>
)

const Store = (props) => {
    const { match } = props;
    return (
        <div>
            <h2>Store</h2>
            <ul>
                <li>
                    <Link to={`/store/shirts`}>shirts</Link>
                </li>
                <li>
                    <Link to={`/store/socks`}>socks</Link>
                </li>
                <li>
                    <Link to={`/store/shoes`}>Shoes</Link>
                </li>
            </ul>
        </div>
    )
}


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/store">Store</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/store" component={Store} />
                    <Route path="/store/socks" component={Socks} />
                </div>
            </Router>
        )
    }
}


export default App;
