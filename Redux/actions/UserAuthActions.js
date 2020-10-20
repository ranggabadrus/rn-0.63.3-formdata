import Axios from 'axios'
import * as types from '../constants/actionTypes'
import {LOGIN_USER_URL} from '../constants/general'

console.log('action 0')
export const getRequest = () =>({
    type : types.GET_REQUEST
})

export const getSuccess = (data) =>({
    type : types.GET_SUCCESS,
    dataAction : data    
  })

export const getFailure = (error) =>({
    type : types.GET_FAILURE,
    error  

})

export const getUserAuth = (email,password) =>{
    console.log('get() :')
    return async(dispatch) => {
        
        try{
            console.log('action request ') 
            dispatch( getRequest() )
            const response = await Axios.post(LOGIN_USER_URL,
                  {
                    email,
                    password
                  } 
               )    
            console.log('action request done')
            
            
            console.log('action success ')
            dispatch(getSuccess(response))
            console.log('data Action :',response.data.token) 
            console.log('action success done') 
            return true                    
        }

        catch (error) { dispatch (getFailure(error)) 
            console.log('action failed') 
            return false
        }
    }


}

