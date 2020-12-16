import {User_Data} from "./userType";
const initialState = {
    numberOfBook : 10
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case User_Data: return{
            ...state,
            numberOfBook: state.numberOfBook - action.payload
        }
        default: return  state;
    }
}

export  default  userReducer;