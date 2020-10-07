import axios from 'axios'

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'

export const startauth = () => {
    return{
        type: AUTH_START
    }
}

export const successAuth = (token) => {
    return{
        type: AUTH_SUCCESS,
        token: token
    }
}

export const failedAuth = (error) => {
    return {
        type: AUTH_FAILED,
        error: error
    }
}


export const auth_start =(email,password,Method)=> {
    return dispatch => {
        dispatch(startauth())
        let url = null;
        if (Method==='sign up') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDapwP1zwVDSTWbPgd5phXsxtkNpvaD1_w'
        }
        else if (Method==="sign in") {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDapwP1zwVDSTWbPgd5phXsxtkNpvaD1_w'
        }
            axios.post(url,{
                email: email,
                password: password,
                returnSecureToken: true
            })
            .then(res=>{ 
                localStorage.setItem('token',res.data.idToken)
                dispatch(successAuth(res.data.idToken))})
            .catch(err=> {  
                 if(err.response){console.log(err.response)
                     dispatch(failedAuth(err.response.data.error.message))}
                            else {dispatch(failedAuth('Network'))}
                })
            
    }
}
