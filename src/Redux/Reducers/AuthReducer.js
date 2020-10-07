
import * as actions from '../actionTypes'
const initialState = { 
    token: null,
    userId: null,
    error: null,
    loading: false,
}

const AuthReducer = (state=initialState , action) => {

        switch (action.type) {
            case actions.AUTH_START:
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            case actions.AUTH_SUCCESS: 
              return {
                  ...state,
                  loading: false,
                  token: action.token
              }
            case actions.AUTH_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
            default:
                 return state
          
        }
    
}

export default AuthReducer