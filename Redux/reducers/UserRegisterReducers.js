import * as types from '../constants/actionTypes'
console.log('reducer 0')
const initialState ={
    loading : false,
    dataReducer : [],
    error : null
    
}
    console.log('reducer 1')        
 function UserRegisterReducers (state=initialState,action) {
    console.log('reducer 2')
    switch (action.type) {
        case types.GET_REQUEST:  
            console.log('reducer request ')
            return Object.assign({}, state, {
                  loading: true,
            
            });
            
            break;

        case types.GET_SUCCESS :  
        console.log('reducer success')
           
            return Object.assign({}, state, {
                loading: false,
                dataReducer : action.dataAction
            });
            
            break;
        case types.GET_FAILURE :  
        console.log('reducer failed')
           
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }
    export default UserRegisterReducers





