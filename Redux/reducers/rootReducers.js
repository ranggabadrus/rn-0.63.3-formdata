import { combineReducers } from 'redux'
import authReducers from '../reducers/authReducers'
//import {testReducer} from './../screens/UserReviewScreen'


const rootReducers  = combineReducers({authReducers})
console.log('root reducer')

export default rootReducers