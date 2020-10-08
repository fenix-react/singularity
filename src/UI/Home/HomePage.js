import React, {Component} from 'react'
import {Redirect} from 'react-router'
import './HomePage.scss'

class HomePage extends Component {

    state = {
        redirect: false
    }

    render() {

        return (
            <React.Fragment>
                <button
                    className='btn'
                    onClick={() => {
                    localStorage.removeItem('token');
                    this.setState({redirect: true})
                }}>
                    Log The Fuck Out</button>
                {this.state.redirect
                    ? <Redirect to='/'></Redirect>
                    : null}
                <nav>
                    <ul>
                        <li>
                            <a href="/google.com">HTML</a>
                        </li>
                        <li>
                            <a href="/dwa">CSS</a>
                        </li>
                        <li>
                            <a href="/dawd">SASS</a>
                        </li>
                    </ul>
                </nav>
                <button className='btnr'>TESTING</button>
            </React.Fragment>
        )
    }
}

export default HomePage