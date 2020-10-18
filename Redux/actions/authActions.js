import Axios from 'axios'
import * as types from './../constants/actionTypes'
import {LOGIN_USER_URL} from './../constants/general'

console.log('action 0')
export const getAuthRequest = () =>({
    type : types.GET_AUTH_REQUEST   
})

export const getAuthSuccess = (data) =>({
    type : types.GET_AUTH_SUCCESS,
    dataAuth : data    
  })

export const getAuthFailure = (error) =>({
    type : types.GET_AUTH_FAILURE,
    error  

})

export const getAuth = (email,password) =>{
    console.log('getNowPlayingAction() :')
    return async( dispatch ) => {
        
        try{
            console.log('action request ') 
            dispatch( getAuthRequest() )
            const response = await Axios.post('https://pacific-oasis-23064.herokuapp.com/user/login',
                  {
                    username :email,
                    password: password
                  } 
               )    
            console.log('action request done')
            
            
            console.log('action success ')
            dispatch(getAuthSuccess(response))
            console.log('data auth :',response) 
            console.log('action success done') 
                      
        }

        catch (error) { dispatch (getAuthFailure(error)) 
            console.log('action failed') 
        }
    }


}

