
const initialState ={
    loading : false,
    data : [],
    error : null
}

function authReducers (state=initialState,action) {
    switch (type) {
        case 'GET_AUTH_REQUEST'    :  
            
            return Object.assign({}, state, {
                  loading: true,

            });
            break;

        case 'GET_AUTH_SUCCESS':  
            //console.log(action.nowPlayingMovies)
            return Object.assign({}, state, {
                loading: false,
                data : action.dataAction
            });
            break;
        case  'GET_AUTH_ERROR' :
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }

    export default authReducers
