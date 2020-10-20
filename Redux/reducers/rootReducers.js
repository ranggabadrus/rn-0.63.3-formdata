import { combineReducers } from 'redux'
import UserAuthReducers from './UserAuthReducers'
import UserRegisterReducers from './UserRegisterReducers'
import UserIdReducers from './UserIdReducer'

const rootReducers  = combineReducers
({UserAuthReducers,UserRegisterReducers,UserIdReducers})
console.log('root reducer')

export default rootReducers