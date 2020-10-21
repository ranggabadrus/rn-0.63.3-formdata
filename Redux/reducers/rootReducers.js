import { combineReducers } from 'redux'
import UserAuthReducers from './UserAuthReducers'
import UserRegisterReducers from './UserRegisterReducers'
import UserIdReducers from './UserIdReducer'

const rootReducers  = combineReducers
({UserAuthReducers,UserRegisterReducers})
console.log('root reducer')

export default rootReducers