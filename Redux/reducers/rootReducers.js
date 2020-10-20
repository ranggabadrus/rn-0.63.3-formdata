import { combineReducers } from 'redux'
import UserAuthReducers from './UserAuthReducers'
import UserRegisterReducers from './UserRegisterReducers'
//import {testReducer} from './../screens/UserReviewScreen'


const rootReducers  = combineReducers
({UserAuthReducers,UserRegisterReducers})
console.log('root reducer')

export default rootReducers