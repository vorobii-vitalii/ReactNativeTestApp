
// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
export const UPDATE_USERS_MULTIPLE='UPDATE_USERS_MULTIPLE'
export const PROVIDE_SEED_API='PROVIDE_SEED_API';
export const PROVIDE_PAGE_API='PROVIDE_PAGE_API'
export const USER_SIGNED_UP='USED_SIGNED_UP';
export const USER_LOG_IN='USER_LOG_IN'
export const USER_LOG_OUT='USER_LOG_OUT'

// action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addUser = newUser => ({
  type: UPDATE_USERS,
  payload: newUser,
})

export const addUsers = newContacts => ({
    type: UPDATE_USERS_MULTIPLE,
    payload: newContacts,
})

export const provideSeed = newSeed => ({
    type:PROVIDE_SEED_API,
    payload:newSeed
})

export const providePage = newPage => ({
    type:PROVIDE_PAGE_API,
    payload:newPage
})

export const userSignedUp=newSignedUpUser=>({
    type:USER_SIGNED_UP,
    payload:newSignedUpUser
})

export const logInUser=user=>({
    type:USER_LOG_IN,
    payload:user
})

export const logOutUser=user=>({
    type:USER_LOG_OUT,
    payload:user
})


