import Axios from 'axios'
import {LOGIN_USER_URL} from './../Constans'

export const getAuthRequest = () =>({
  type : 'GET_AUTH_REQUEST'   
    
})

export const getAuthSuccess = (authData) =>({
    type : 'GET_AUTH_SUCCESS',
    dataAction : authData    
  })

export const getAuthFailure = (error) =>({
    type : 'GET_AUTH_ERROR',
    error  

})

export const getAuth = (email,password) =>{
    return async( dispatch ) => {
        
        try{
            dispatch( getAuthRequest() )
            const response = await Axios.get(LOGIN_USER_URL,
                {
                  username :email,
                  password: password
                } 
              )    
            
            dispatch(getAuthSuccess(response))
            //console.log(response.data.results)            
        }

        catch (error) { dispatch (getAuthFailure(error)) 

        }
    }


}

