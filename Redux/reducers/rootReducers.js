import { combineReducers } from 'redux'
import UserAuthReducers from './UserAuthReducers'
//import {testReducer} from './../screens/UserReviewScreen'


const rootReducers  = combineReducers({UserAuthReducers})
console.log('root reducer')

export default rootReducers