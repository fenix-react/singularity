import React, { Component } from 'react'
import { Redirect } from 'react-router'



class HomePage extends Component {

    state={
        redirect: false
    }

    render(){

        return(
            <React.Fragment>
            <button onClick={()=>{localStorage.removeItem('token');
                                 this.setState({redirect: true})}}> Log The Fuck Out</button>
            {this.state.redirect ? <Redirect to='/'>  </Redirect> : null}
            </React.Fragment>
        )
    }
}

export default HomePage