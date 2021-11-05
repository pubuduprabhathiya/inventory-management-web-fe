import * as actionTypes from '../actions/action-types';

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const initialState = {
    token: null,
    user: null,
    firstName: null,
    lastName: null,
    userType: null,
    userEmail: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    console.log("start update");
    return updateObject( state, { 
        token: action.token,
        user: action.user,
        firstName: action.firstName,
        lastName: action.lastName,
        userType: action.userType,
        userEmail:action.userEmail,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, user: null, firstName: null, lastName: null, userType: null, userEmail:null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const updateError = (state, action) => {
    return updateObject(state, { error: action.error })
}


const reducer = ( state = initialState, action ) => {
    console.log(action,"action");
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.UPDATE_ERROR: return updateError(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;