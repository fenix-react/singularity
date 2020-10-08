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
                            <a href="#">HTML</a>
                        </li>
                        <li>
                            <a href="#">CSS</a>
                        </li>
                        <li>
                            <a href="#">SASS</a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default HomePage