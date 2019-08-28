import {combineReducers} from 'redux'

import { UPDATE_USERS,UPDATE_USERS_MULTIPLE,PROVIDE_SEED_API,PROVIDE_PAGE_API,USER_SIGNED_UP,USER_LOG_IN,USER_LOG_OUT} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const usersReducer = (state = [], action) => {
  if (action.type === UPDATE_USERS) return [action.payload, ...state]
  if (action.type === UPDATE_USERS_MULTIPLE) return [...state,...action.payload]
  return state
}

const signedUpAppUsersReducer=(state=[],action)=>{
    if(action.type===USER_SIGNED_UP) return [...state,action.payload]
    return state;
}

const currentAppUserReducer=(state={},action)=>{
    if(action.type===USER_LOG_IN) return merge(state,action.payload);
    if(action.type===USER_LOG_OUT) return merge(state,action.payload)
    return state;
}


const apiDataReducer = ( state = {} , action ) => {
    switch (action.type) {
        case PROVIDE_SEED_API:
          return merge(state, action.payload)
        case PROVIDE_PAGE_API:
          return merge(state, action.payload)
        default:
          return state
    }
}

const reducer = combineReducers({
    users: usersReducer,
    apiData: apiDataReducer,
    appSignedUsers:signedUpAppUsersReducer,
    currentAppUser:currentAppUserReducer
})

export default reducer
