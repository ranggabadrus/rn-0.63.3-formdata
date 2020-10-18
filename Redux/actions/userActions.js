import Axios from 'axios'
import {BASE_URL} from './../Constans'

export const getAuth = () =>({
  type : 'GET_AUTH',
  token : userToken   

})

export const getRegister = (movies) =>({
    type : 'GET_REGISTER'
         
  })

export const getUserById = (error) =>({
    type : 'GET_USER_ID',
    data : userData
})

export const getUserActions = () =>{
    return async( dispatch ) => {
        
            dispatch(getAuth())
            
            //dispatch(getRegister())
          
            //dispatch(getUserById()) 
       
    }


}
