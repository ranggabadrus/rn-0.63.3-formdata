import Axios from 'axios'
//import * as types from './../constants/actionTypes'
import {BASE_URL} from './../Constans'

export const getNowPlayingRequest = () =>({
  type : types.GET_NOW_PLAYING_REQUEST   
})

export const getNowPlayingSuccess = (movies) =>({
    type : types.GET_NOW_PLAYING_SUCCESS,
    nowPlayingMovies : movies    
  })

export const getNowPlayingFailure = (error) =>({
    type : types.GET_NOW_PLAYING_FAILURE,
    error  

})

export const getNowPlayingAction = () =>{
    return async( dispatch ) => {
        
        try{
            dispatch( getNowPlayingRequest() )
            const response = await Axios.get(`${BASE_URL}/now_playing?api_key=${API_KEY}`)    
            
            dispatch(getNowPlayingSuccess(response.data.results))
            //console.log(response.data.results)            
        }

        catch (error) { dispatch (getNowPlayingFailure(error)) 

        }
    }


}
