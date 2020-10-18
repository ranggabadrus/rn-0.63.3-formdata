import {combineReducers} from 'redux'
import authReducers from '../reducers/authReducers'

const rootReducers = combineReducers(authReducers)

export default rootReducers