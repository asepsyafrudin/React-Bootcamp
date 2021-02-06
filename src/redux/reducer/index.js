import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/constant";

const initialState = {
    data : [{
        id : 1,
        name : "putri"
    }, {
        id : 2,
        name : "rezvan"
    }, {
        id : 3,
        name : "asep"
    }]
}

const rootReducer = (state = initialState , action ) => {
    switch (action.type) {
        case ADD_TODO:
            return{  data : [...state.data, action.payload]}
            
        case DELETE_TODO: 
              return{
                      data : action.payload
                  }
              
        case UPDATE_TODO : 
            return{
                    data : action.payload
                }
            
        default:
            return state;
    }
}

export default rootReducer;