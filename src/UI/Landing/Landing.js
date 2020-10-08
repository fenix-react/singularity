import React, {useState} from 'react';

import {Link, NavLink, Redirect} from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import classes from './Landing.module.css'
import {connect} from 'react-redux'
import * as actions from '../../Redux/actionTypes'
import Spinner from '../Spinner/Spinner'
import {CButton} from '@coreui/react'
import {CIcon} from '@coreui/icons-react'

const Landing = (props) => {

    const [email,
        setEmail] = useState('')
    const [password,
        setPassword] = useState('')

    let errorMessage = null

    if (props.error === 'INVALID_EMAIL') {
        errorMessage = 'Please Enter A Valid Email'
    } else if (props.error === 'MISSING_PASSWORD') {
        errorMessage = 'Please Enter Your Password'
    } else if (props.error === 'Network') {
        errorMessage = 'Please Use A VPN'
    } else {
        errorMessage = 'NOT LISTED'
    }

    let redirecting = null
    if (localStorage.getItem('token')) {
        redirecting = <Redirect to='/home'></Redirect>
    }

    return (
        <div className={classes.page}>
            <div className={classes.halfPage1}>
                <div className={classes.lang}>
                    <NavLink className={classes.link} to='/fa'>Persian</NavLink>
                    <div className={classes.line}></div>
                    <NavLink
                        style={{
                        marginLeft: '0.7vw'
                    }}
                        className={classes.link}
                        to='/'>English</NavLink>

                </div>
                <div className={classes.LandCont}>
                    <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><CIcon name="cib-facebook"/>
                        <span>Facebook</span>
                    </CButton>

                    <div className={classes.contentCont}>
                        <i className={`fa fa-share-alt ${classes.icon}`}></i>
                        <p className={classes.content}>
                            Share Your Moments</p>
                    </div>
                    <div className={classes.contentCont}>
                        <i className={`fa fa-search ${classes.icon}`}></i>
                        <p className={classes.content}>
                            Explore The World</p>
                    </div>
                    <div className={classes.contentCont}>
                        <i className={`fa fa-heart ${classes.icon}`}></i>
                        <p className={classes.content}>
                            Pursue Your Intrests</p>
                    </div>

                </div>
            </div>
            <div className={classes.halfPage2}>
                <div className={classes.titleCont}>
                    <h1 className={classes.title}>
                        PORTAL
                    </h1>
                    <p className={classes.titleP}>The Other Face Of Social Media</p>
                </div>
                {props.error
                    ? <div className={classes.errorCont}>
                            <p className={classes.error}>
                                <i className='fa fa-exclamation-circle'></i>
                                {errorMessage}</p>
                        </div>
                    : null}
                {props.loading
                    ? <Spinner></Spinner>
                    : <form>
                        <div className={classes.form}>
                            {redirecting}
                            <div className={classes.userName}>
                                <i className={`fa fa-user ${classes.formIcon}`}></i>
                                <input
                                    onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                    value={email}
                                    type='email'
                                    className={classes.input}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Email Or Username'}
                                    placeholder='Email Or Username'></input>
                            </div>
                            <div className={classes.userName}>
                                <i className={`fa fa-lock ${classes.formIcon}`}></i>
                                <input
                                    onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Password'}
                                    type='Password'
                                    className={classes.input}
                                    placeholder='Password'></input>
                            </div>
                            <Link className={classes.forgot} to='/forgorPassword'>Forgot Password?</Link>
                            <button
                                onClick={() => {
                                props.startAuth(email, password, 'sign in');
                                setPassword(null)
                            }}
                                className={classes.button}>Login</button>

                            <div className={classes.register}>
                                Don`t have an account?
                                <Link
                                    to='/register'
                                    style={{
                                    color: '#2ab8bc'
                                }}>Register</Link>
                            </div>
                        </div>
                    </form>}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {loading: state.auth.loading, token: state.auth.token, error: state.auth.error}
}

const mapDispatchToProps = dispatch => {
    return {
        startAuth: (email, password, method) => dispatch(actions.auth_start(email, password, method))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
